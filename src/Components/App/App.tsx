import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { categoryIDs } from '../../utils';
import { Articles } from '../Articles/Articles';
import { ArticleItem } from '../Article/Article';
import { Navigation } from '../Navigation/Navigation';
import { NewsAPI } from '../../types';
export const App = () => {
  const [category] = React.useState<string>('index');
  const [articles] = React.useState<NewsAPI>({
    items: [],
    categories: [],
    sources: [],
  });

  return (
    <BrowserRouter>
      <div id="root"></div>
      <header className="header">
        <div className="container">
          <Navigation className="header-nav" currentCategory={category} placement="header" />
        </div>
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/article/:id"
            element={<ArticleItem categories={articles.categories} sources={articles.sources} />}
          />
          <Route path="/:categoryId" element={<Articles />} />
          <Route path="/" element={<Articles />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <Navigation className="footer__nav" currentCategory={category} placement="footer" />

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
