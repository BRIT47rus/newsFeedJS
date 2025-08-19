import React, { FC, ReactNode, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import './Page.css';
import { Logo } from '../Logo/Logo';
import { ColorSchemeSwitcher } from '../ColorSchemeSwitcher/ColorSchemeSwitcher';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
interface Props {
  children: ReactNode;
}
export const Page: FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {showModal && <ModalWrapper onClose={() => setShowModal(false)}></ModalWrapper>}
      <header className="header">
        <div className="container header__container">
          <Logo />
          <Navigation className="header__navigation" />
          <div className="header__controls">
            <ColorSchemeSwitcher />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <Logo />
            <Navigation className="footer__navigation" />
          </div>
          <div className="footer__bottom">
            Сделано{' '}
            <a className="footer__link" href="https://vk.com/vovirus" target="_blank" rel="noreferrer">
              Владимиром
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
