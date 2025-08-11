import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import { App } from './Components/App/App';
import { initializeApi } from './Components/api';
import { BrowserRouter } from 'react-router-dom';

initializeApi();
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
