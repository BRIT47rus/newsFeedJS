import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Articles } from '../Articles/Articles';
import { ArticleItem } from '../Article/Article';
import { Navigation } from '../Navigation/Navigation';
import { NewsAPI } from '../../types';
export const App = () => {
  return (
    <BrowserRouter>
      <div id="root"></div>
      <header className="header">
        <div className="container">
          <Navigation className="header-nav" placement="header" />
        </div>
      </header>
      <main className="main">
        <Routes>
          <Route path="/article/:id" element={<ArticleItem />} />
          <Route path="/:categoryId" element={<Articles />} />
          <Route path="/" element={<Articles />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <Navigation className="footer__nav" placement="footer" />

          <div className="footer__column">
            <p className="footer__text">
              Все вопросы
              <a href="https://vk.com/vovirus" className="footer__link" target="_blank">
                Владимир
              </a>
            </p>
            <p className="footer__copy">@ 2024</p>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
};
