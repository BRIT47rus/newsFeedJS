import React, { useReducer, useState } from 'react';
import './LoginContainer.css';
import { LoginForm, TLoginField } from '../../LoginForm/LoginForm';
import { validateEmail } from './utils';
import { useAuth } from '../auth/AuthContextProvier';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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
  const { logginWithEmailAndPassword } = useAuth();
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
    </div>
  );
};
