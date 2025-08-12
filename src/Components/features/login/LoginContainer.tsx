import React from 'react';
import { LoginForm } from '../../LoginForm/LoginForm';
import './LoginContainer.css';
export const LoginContainer = () => {
  const tmp = {
    name: '',
    value: '',
    onChange: console.log,
  };
  return (
    <div className="login-container">
      <LoginForm email={tmp} onSubmit={console.log} password={tmp} />
    </div>
  );
};
