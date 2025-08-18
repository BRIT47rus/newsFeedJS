import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import { App } from './Components/App/App';
import { initializeApi } from './Components/api';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Components/features/auth/AuthContextProvier';

const firebaseApp = initializeApi();
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <AuthContextProvider firebaseApp={firebaseApp}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
