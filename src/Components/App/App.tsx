import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Articles } from '../Articles/Articles';
import { ArticleItem } from '../Article/Article';

import { Page } from '../Page/Page';
import { AdminPage } from '../AdminePage/AdminePage';
import { AdminArticles } from '../AdminArticles/AdminArticles';
import { AdminArticlesItem } from '../AdminArticleItem/AdminArticleItem';
export const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminPage>
              <AdminArticles />
            </AdminPage>
          }
        />
        <Route
          path="/admin/edit/:id"
          element={
            <AdminPage>
              <AdminArticlesItem />
            </AdminPage>
          }
        />
        <Route
          path="/admin/create"
          element={
            <AdminPage>
              <AdminArticlesItem />
            </AdminPage>
          }
        />
        <Route
          path="/article/:id"
          element={
            <Page>
              <ArticleItem />
            </Page>
          }
        />
        <Route
          path="/:categoryId"
          element={
            <Page>
              <Articles />
            </Page>
          }
        />
        <Route
          path="/"
          element={
            <Page>
              <Articles />
            </Page>
          }
        />
      </Routes>
    </>
  );
};
