import React, { FC } from 'react';
import './Navigation.css';
import logo from '../../image/logo.svg';
import { categoryNames } from '../../utils';

interface NavigationProps {
    onNavClick: (event: React.MouseEvent<HTMLElement>) => void;
    currentCategory: string;
    className?: string;
    placement: 'header' | 'footer';
}
export const Navigation: FC<NavigationProps> = ({
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
                <img className="navigation__image" src={logo} alt="" />
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
                                    {
                                        categoryNames[
                                            item as keyof typeof categoryNames
                                        ]
                                    }
                                </a>
                            </li>
                        );
                    }
                )}
            </ul>
        </nav>
    );
};
