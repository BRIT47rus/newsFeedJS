import React from 'react';
import { categoryNames } from '../../utils.js';
import './Navigation.css';
export const Navigation = ({
    onNavClick,
    currentCategory,
    className = '',
    placement = 'header',
}) => {
    return (
        <nav
            className={`navigation grid  navigation--${placement} ${className} `}
        >
            <a data-href="index" href="#" className="navigation__logo">
                <img
                    className="navigation__image"
                    src="./image/logo.svg"
                    alt=""
                />
            </a>
            <ul className="navigation__list">
                {['index', 'fashion', 'tech', 'sport', 'politics'].map(
                    (item) => {
                        return (
                            <li className="navigation__item" key={item}>
                                <a
                                    onClick={onNavClick}
                                    data-href={item}
                                    href="#"
                                    className={`navigation__link ${
                                        currentCategory === item
                                            ? 'navigation__link--active'
                                            : ''
                                    }`}
                                >
                                    {categoryNames[item]}
                                </a>
                            </li>
                        );
                    }
                )}
            </ul>
        </nav>
    );
};
