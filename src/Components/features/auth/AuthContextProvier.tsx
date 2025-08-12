import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { AuthContextProviderProps, TAuthContext } from './types';
import { getAuth, User } from 'firebase/auth';

const authContext = createContext<TAuthContext>({ isAuth: null, user: null });
export const useAuth = (): TAuthContext => useContext<TAuthContext>(authContext);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children, firebaseApp }) => {
  const [isAuth, setIsAuth] = useState<TAuthContext['isAuth']>(null);
  const [user, setUser] = useState<User | null>(null);
  const [auth] = useState(getAuth(firebaseApp));
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        setUser(user);
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });
  }, []);
  return <authContext.Provider value={{ isAuth, user }}>{children}</authContext.Provider>;
};
//46/24  5/1
