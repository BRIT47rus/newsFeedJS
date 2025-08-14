import React, { useReducer, useState } from 'react';
import './LoginContainer.css';
import { LoginForm, TLoginField } from '../../LoginForm/LoginForm';
import { validateEmail } from './utils';
import { ALLOWED_OAUTH_PROVIDERS, useAuth } from '../auth/AuthContextProvier';
import { Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LoginIcon from '@mui/icons-material/Login';
import { ProviderId, UserCredential } from 'firebase/auth';
type TLoginFieldState = Omit<TLoginField, 'onChange'>;
type TAction = {
  type: 'change' | 'error';
  value: string;
};
const reducer = (state: TLoginFieldState, action: TAction): TLoginFieldState => {
  switch (action.type) {
  case 'change':
    return {
      ...state,
      value: action.value,
      error: false,
      helper: '',
    };
  case 'error':
    return {
      ...state,
      error: true,
      helper: action.value,
    };

  default:
    break;
  }
  return state;
};

const getAyuthProviderIcon = (provider: string) => {
  switch (provider) {
  case ProviderId.GOOGLE:
    return <GoogleIcon fontSize="inherit" />;

  case ProviderId.GITHUB:
    return <GitHubIcon fontSize="inherit" />;
  default:
    <LoginIcon fontSize="inherit" />;
    break;
  }
};

export const LoginContainer = () => {
  const history = useNavigate();
  const [authErr, setAuthError] = useState('');
  const { logginWithEmailAndPassword, logInWithPopup } = useAuth();

  const [emailState, dispatchEmail] = useReducer(reducer, {
    name: 'email',
    value: '',
  });
  const [passwordState, dispatchPasswordState] = useReducer(reducer, {
    name: 'password',
    value: '',
  });
  const proccessLogin = (promise: Promise<UserCredential>): void => {
    promise
      .then(() => {
        history('/admin');
      })
      .catch((errr) => {
        setAuthError(errr.message || 'error');
      });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    if (!validateEmail(emailState.value)) {
      isValid = false;
      dispatchEmail({ type: 'error', value: 'Введите корректный email' });
    }
    if (passwordState.value.length <= 6) {
      isValid = false;
      dispatchPasswordState({ type: 'error', value: 'Длина пароля меньше 7 символов' });
    }
    if (isValid) {
      proccessLogin(logginWithEmailAndPassword(emailState.value, passwordState.value));
    }
  };
  const onOAuthClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const dataset = (e.target as HTMLElement)?.closest<HTMLLIElement>('.login-oaut-container__item')?.dataset;
    if (dataset?.providerid) {
      proccessLogin(logInWithPopup(dataset?.providerid));
    }
  };

  return (
    <div className="login-container">
      {authErr && (
        <Typography variant="subtitle2" color="error" sx={{ m: 2 }}>
          {authErr}
        </Typography>
      )}
      <LoginForm
        email={{ ...emailState, onChange: (e) => dispatchEmail({ type: 'change', value: e.currentTarget.value }) }}
        password={{
          ...passwordState,
          onChange: (e) => dispatchPasswordState({ type: 'change', value: e.currentTarget.value }),
        }}
        onSubmit={onSubmit}
      />
      <div className="login-oauth-container">
        {Object.keys(ALLOWED_OAUTH_PROVIDERS).map((key) => (
          <Link key={key} className="login-oaut-container__item" onClick={onOAuthClick} data-providerid={key}>
            {getAyuthProviderIcon(key)}
          </Link>
        ))}
      </div>
    </div>
  );
};
