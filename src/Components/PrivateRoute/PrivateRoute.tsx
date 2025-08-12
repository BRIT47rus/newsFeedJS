import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContextProvier';
import { Box, CircularProgress } from '@mui/material';
type PrivateProps = {
  children?: ReactNode;
};
export const PrivateRoute = ({ children }: PrivateProps) => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    if (isAuth === null) {
      return (
        <Box sx={{ textAlign: 'center', padding: 4 }}>
          <CircularProgress />
        </Box>
      );
    }
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
