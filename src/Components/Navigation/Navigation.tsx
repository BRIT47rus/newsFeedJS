import React, { FC } from 'react';
import './Navigation.css';
import logo from '../../image/logo.svg';
import { categoryNames } from '../../utils';
import { Link } from 'react-router-dom';

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
              <Link
                to={item}
                className={`navigation__link ${currentCategory === item ? 'navigation__link--active' : ''}`}
              >
                {categoryNames[item as keyof typeof categoryNames]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
