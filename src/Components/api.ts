import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
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
const partnersPostsCollection = 'partners-posts';

export const getPartnersArticles = async (): Promise<IPartnerArticle[]> => {
  const db = getFirestore();
  const articles: IPartnerArticle[] = [];

  try {
    const querySnapshot = await getDocs(collection(db, partnersPostsCollection));
    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<IPartnerArticle, 'id'>;
      articles.push({
        id: doc.id,
        ...data,
      });
    });
  } catch (error) {
    return Promise.reject(error);
  }

  return articles;
};
export const createPartnerArticle = async (data: Omit<IPartnerArticle, 'id'>) => {
  const db = getFirestore();
  try {
    await addDoc(collection(db, partnersPostsCollection), data);
  } catch (error) {
    return Promise.reject(error);
  }
};
export const getParnerArticle = async (id: string): Promise<IPartnerArticle> => {
  const db = getFirestore();
  const docRef = doc(db, partnersPostsCollection, id);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as Omit<IPartnerArticle, 'id'>;
      return { id: docSnap.id, ...data };
    } else {
      throw Error('Не такого документа');
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updatePartnerArticle = async (id: string, data: Omit<IPartnerArticle, 'id'>) => {
  const db = getFirestore();
  const dataRef = doc(db, partnersPostsCollection, id);
  try {
    await updateDoc(dataRef, data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deletePartnerArticle = async (id: string) => {
  const db = getFirestore();
  const dataRef = doc(db, partnersPostsCollection, id);
  try {
    await deleteDoc(dataRef);
  } catch (error) {
    return Promise.reject(error);
  }
};
