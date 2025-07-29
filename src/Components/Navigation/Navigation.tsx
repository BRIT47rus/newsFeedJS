import React, { FC } from 'react';
import './Navigation.css';
import logo from '../../image/logo.svg';
import { categoryNames } from '../../utils';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
  currentCategory: string;
  className?: string;
  placement: 'header' | 'footer';
}
export const Navigation: FC<NavigationProps> = ({ currentCategory, className = '', placement = 'header' }) => {
  return (
    <nav className={`navigation grid  navigation--${placement} ${className} `}>
      <a data-href="index" href="#" className="navigation__logo">
        <img className="navigation__image" src={logo} alt="" />
      </a>
      <ul className="navigation__list">
        {['index', 'fashion', 'tech', 'sport', 'politics'].map((item) => {
          return (
            <li className="navigation__item" key={item}>
              <NavLink
                className={({ isActive }) =>
                  `navigation__link ${isActive ? 'navigation__link--active' : 'navigation__link'}`
                }
                to={item}
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
