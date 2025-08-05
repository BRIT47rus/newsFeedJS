import React, { FC, ReactNode } from 'react';
import { Navigation } from '../Navigation/Navigation';
import './Page.css';
interface Props {
  children: ReactNode;
}
export const Page: FC<Props> = ({ children }) => {
  return (
    <>
      <>
        <header className="header">
          <div className="container">
            <Navigation className="header-nav" placement="header" />
          </div>
        </header>
        <main className="main">{children}</main>
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
      </>
    </>
  );
};
