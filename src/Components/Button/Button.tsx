import './Button.css';
import React, { ButtonHTMLAttributes, FC } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}
export const Button: FC<ButtonProps> = ({ children, onClick, loading = false, ...rest }) => {
  return (
    <button className="button" {...rest} onClick={loading ? undefined : onClick}>
      {children}
      {loading && (
        <span className="button__loading">
          <span className="button__sniper"> ߷</span>
        </span>
      )}
    </button>
  );
};
