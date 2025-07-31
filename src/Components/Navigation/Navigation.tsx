import React, { FC } from 'react';
import './Navigation.css';
import logo from '../../image/logo.svg';
import { categoryNames } from '../../utils';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
  className?: string;
  placement: 'header' | 'footer';
}
export const Navigation: FC<NavigationProps> = ({ className = '', placement = 'header' }) => {
  const location = useLocation();
  return (
    <nav className={`navigation grid  navigation--${placement} ${className} `}>
      <NavLink to="/" className="navigation__logo">
        <img className="navigation__image" src={logo} alt="" />
      </NavLink>
      <ul className="navigation__list">
        {['index', 'fashion', 'tech', 'sport', 'politics'].map((item) => {
          return (
            <li className="navigation__item" key={item}>
              <NavLink
                className={({ isActive }) => {
                  let classNames = 'navigation__link';
                  if (isActive) {
                    classNames += ' navigation__link--active';
                  } else if (item === 'index' && location.pathname === '/') {
                    classNames += ' navigation__link--active';
                  }

                  return classNames;
                }}
                to={`/${item}`}
              >
                {categoryNames[item as keyof typeof categoryNames]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
