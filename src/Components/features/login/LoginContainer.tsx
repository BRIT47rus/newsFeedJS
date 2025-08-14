import React, { useReducer, useState } from 'react';
import './LoginContainer.css';
import { LoginForm, TLoginField } from '../../LoginForm/LoginForm';
import { validateEmail } from './utils';
import { useAuth } from '../auth/AuthContextProvier';
import { Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
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
      logginWithEmailAndPassword(emailState.value, passwordState.value)
        .then(() => {
          history('/admin');
        })
        .catch((errr) => {
          setAuthError(errr.message || 'error');
        });
    }
  };
  const onOAuthClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const dataset = (e.target as HTMLElement)?.closest<HTMLLIElement>('.login-oaut-container__item')?.dataset;
    if (dataset?.providerid) {
      logInWithPopup(dataset?.providerid)
        .then(() => {
          history('/admin');
        })
        .catch((errr) => {
          setAuthError(errr.message || 'error');
        });
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
        <Link className="login-oaut-container__item" onClick={onOAuthClick} data-providerid="google.com">
          <GoogleIcon fontSize="inherit" />
        </Link>
      </div>
    </div>
  );
};
