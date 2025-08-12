import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContextProvier';
type PrivateProps = {
  children?: ReactNode;
};
export const PrivateRoute = ({ children }: PrivateProps) => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
