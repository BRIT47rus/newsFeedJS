import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { AuthContextProviderProps, TAuthContext } from './types';
import { signOut, getAuth, User, signInWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';

const authContext = createContext<TAuthContext>({
  isAuth: null,
  user: null,
  logginWithEmailAndPassword: () => Promise.reject({}),
  logOut: () => undefined,
});
export const useAuth = (): TAuthContext => useContext<TAuthContext>(authContext);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children, firebaseApp }) => {
  const [isAuth, setIsAuth] = useState<TAuthContext['isAuth']>(null);
  const [user, setUser] = useState<User | null>(null);
  const [auth] = useState(getAuth(firebaseApp));
  const logginWithEmailAndPassword = (email: string, pass: string) => {
    setUser(null);
    setIsAuth(null);
    return signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        //todo
        return result;
      })
      .catch((e) => {
        console.log('Loggin error');
        throw e;
      });
  };
  const isUserAuth = async (firebase: FirebaseApp) => {
    const db = getFirestore(firebase);
    return await getDoc(doc(db, '/internal/auth'));
  };
  useEffect(() => {
    if (!auth) {
      return;
    }
    auth.setPersistence(browserLocalPersistence);
    auth.onAuthStateChanged((user) => {
      if (user) {
        isUserAuth(firebaseApp)
          .then(() => {
            setIsAuth(true);
            setUser(user);
          })
          .catch(() => {
            logOut();
            setIsAuth(false);
            setUser(null);
          });
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });
  }, [auth]);

  const logOut = () => signOut(auth);
  return (
    <authContext.Provider value={{ logOut, logginWithEmailAndPassword, isAuth, user }}>{children}</authContext.Provider>
  );
};
// 6.1 21
