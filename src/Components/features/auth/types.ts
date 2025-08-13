import { FirebaseApp } from 'firebase/app';
import { User, UserCredential } from 'firebase/auth';
import { ReactNode } from 'react';

export type TAuthContext = {
  isAuth: boolean | null;
  user: User | null;
  logginWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;
};
export interface AuthContextProviderProps {
  children: ReactNode;
  firebaseApp: FirebaseApp;
}
