import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { IPartnerArticle } from '../types';

export const initializeApi = () => {
  initializeApp({
    apiKey: 'AIzaSyBeKOxloACETNZOR9gFQd5RrvVcBYhC0d0',
    authDomain: 'neewsbrit.firebaseapp.com',
    projectId: 'neewsbrit',
    storageBucket: 'neewsbrit.firebasestorage.app',
    messagingSenderId: '957123495828',
    appId: '1:957123495828:web:322cfb2f38755a556e3181',
  });
  getFirestore();
};

export const getPartnersArticles = async (): Promise<IPartnerArticle[]> => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, 'partners-posts'));
  const articles: IPartnerArticle[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as Omit<IPartnerArticle, 'id'>;
    articles.push({
      id: doc.id,
      ...data,
    });
  });
  return articles;
};
