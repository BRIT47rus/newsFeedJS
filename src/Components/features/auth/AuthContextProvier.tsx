import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { AuthContextProviderProps, TAuthContext } from './types';
import {
  signInWithPopup,
  signOut,
  getAuth,
  User,
  signInWithEmailAndPassword,
  browserLocalPersistence,
  ProviderId,
  GoogleAuthProvider,
} from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';
// eslint-disable-next-line
export const ALLOWED_OAUTH_PROVIDERS: Record<string, any> = {
  [ProviderId.GOOGLE]: new GoogleAuthProvider(),
};
const authContext = createContext<TAuthContext>({
  isAuth: null,
  user: null,
  logginWithEmailAndPassword: () => Promise.reject({}),
  logOut: () => undefined,
  logInWithPopup: () => Promise.reject({}),
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

  const logInWithPopup = (provider: string) => {
    setUser(null);
    setIsAuth(null);
    return signInWithPopup(auth, ALLOWED_OAUTH_PROVIDERS[provider])
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
    <authContext.Provider value={{ logInWithPopup, logOut, logginWithEmailAndPassword, isAuth, user }}>
      {children}
    </authContext.Provider>
  );
};
// 6.1 21
