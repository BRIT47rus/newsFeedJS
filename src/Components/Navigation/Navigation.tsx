import React, { FC } from 'react';
import './Navigation.css';
import { categoryNames } from '../../utils';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface NavigationProps {
  className?: string;
}
export const Navigation: FC<NavigationProps> = ({ className = '' }) => {
  const location = useLocation();
  return (
    <nav className={classNames('navigation', className)}>
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
