import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { AuthContextProviderProps, TAuthContext } from './types';
import { getAuth, User, signInWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth';

const authContext = createContext<TAuthContext>({
  isAuth: null,
  user: null,
  logginWithEmailAndPassword: () => Promise.reject({}),
});
export const useAuth = (): TAuthContext => useContext<TAuthContext>(authContext);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children, firebaseApp }) => {
  const [isAuth, setIsAuth] = useState<TAuthContext['isAuth']>(null);
  const [user, setUser] = useState<User | null>(null);
  const [auth] = useState(getAuth(firebaseApp));
  const logginWithEmailAndPassword = (email: string, pass: string) =>
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        //todo
        return result;
      })
      .catch((e) => {
        console.log('Loggin error');
        throw e;
      });

  useEffect(() => {
    auth.setPersistence(browserLocalPersistence);
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
  return <authContext.Provider value={{ logginWithEmailAndPassword, isAuth, user }}>{children}</authContext.Provider>;
};
