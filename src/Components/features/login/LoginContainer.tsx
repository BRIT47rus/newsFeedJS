import React, { useReducer } from 'react';
import './LoginContainer.css';
import { LoginForm, TLoginField } from '../../LoginForm/LoginForm';
type TLoginFieldState = Omit<TLoginField, 'onChange'>;
type TAction = {
  type: 'change';
  value: string;
};
const reducer = (state: TLoginFieldState, action: TAction): TLoginFieldState => {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        value: action.value,
      };

    default:
      break;
  }
  return state;
};

export const LoginContainer = () => {
  const [emailState, dispatchEmail] = useReducer(reducer, {
    name: 'email',
    value: '',
  });
  const [passwordState, dispatchPasswordState] = useReducer(reducer, {
    name: 'password',
    value: '',
  });

  return (
    <div className="login-container">
      <LoginForm
        email={{ ...emailState, onChange: (e) => dispatchEmail({ type: 'change', value: e.currentTarget.value }) }}
        password={{
          ...passwordState,
          onChange: (e) => dispatchPasswordState({ type: 'change', value: e.currentTarget.value }),
        }}
        onSubmit={console.log}
      />
    </div>
  );
};
