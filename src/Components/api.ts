import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { IPartnerArticle } from '../types';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
export const initializeApi = () => {
  const firebaseApi = initializeApp({
    apiKey: 'AIzaSyAJYq-evj4FZq5qTylzJQfwqO2CD24r3c8',
    authDomain: 'news-brit.firebaseapp.com',
    projectId: 'news-brit',
    storageBucket: 'news-brit.firebasestorage.app',
    messagingSenderId: '62898230727',
    appId: '1:62898230727:web:2296002b48b3fe2e54b5e2',
  });
  getAuth(firebaseApi);
  getFirestore(firebaseApi);
  getStorage(firebaseApi);
  return firebaseApi;
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
export const uploadFile = async (file: File): Promise<string> => {
  const storage = getStorage();
  const storageRef = ref(storage, `${file.name}-${Date.now()}`);
  try {
    const snapshot = await uploadBytes(storageRef, file);
    const url = getDownloadURL(snapshot.ref);
    return url;
  } catch (error) {
    return Promise.reject(error);
  }
};
