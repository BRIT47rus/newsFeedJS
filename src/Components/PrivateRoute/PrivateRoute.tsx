import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
type PrivateProps = {
  children: ReactNode;
};
export const PrivateRoute = ({ children }: PrivateProps) => {
  const auth = true;
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
