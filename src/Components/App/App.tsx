import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Articles } from '../Articles/Articles';
import { ArticleItem } from '../Article/Article';
import Admin from '../Admin/Admin';
import { Page } from '../Page/Page';
export const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
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
