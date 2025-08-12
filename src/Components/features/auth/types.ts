import { FirebaseApp } from 'firebase/app';
import { User } from 'firebase/auth';
import { ReactNode } from 'react';

export type TAuthContext = {
  isAuth: boolean | null;
  user: User | null;
};
export interface AuthContextProviderProps {
  children: ReactNode;
  firebaseApp: FirebaseApp;
}
