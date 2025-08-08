import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import { App } from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';

import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: 'AIzaSyBeKOxloACETNZOR9gFQd5RrvVcBYhC0d0',
  authDomain: 'neewsbrit.firebaseapp.com',
  projectId: 'neewsbrit',
  storageBucket: 'neewsbrit.firebasestorage.app',
  messagingSenderId: '957123495828',
  appId: '1:957123495828:web:322cfb2f38755a556e3181',
});

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
