import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ArticlePage } from '../ArticlePage/ArticlePage';

import { Page } from '../Page/Page';
import { AdminPage } from '../AdminePage/AdminePage';
import { AdminArticles } from '../AdminArticles/AdminArticles';
import { AdminArticlesItem } from '../AdminArticleItem/AdminArticleItem';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { LoginContainer } from '../features/login/LoginContainer';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import { HomePage } from '../HomePage/HomePage';
export const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <Page>
              <LoginContainer />
            </Page>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage>
                <AdminArticles />
              </AdminPage>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit/:id"
          element={
            <PrivateRoute>
              <AdminPage>
                <AdminArticlesItem />
              </AdminPage>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/create"
          element={
            <PrivateRoute>
              <AdminPage>
                <AdminArticlesItem />
              </AdminPage>
            </PrivateRoute>
          }
        />
        <Route
          path="/article/:id"
          element={
            <Page>
              <ArticlePage />
            </Page>
          }
        />
        <Route
          path="/:category"
          element={
            <Page>
              <CategoryPage />
            </Page>
          }
        />
        <Route
          path="/"
          element={
            <Page>
              <HomePage />
            </Page>
          }
        />
      </Routes>
    </>
  );
};
