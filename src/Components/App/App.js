import { categoryIDs } from '../../utils.js';
import { Navigation } from '../Navigation/Navigation.js';
import { Articles } from '../Articles/Articles.js';
import React from 'react';
import './App.css';
export const App = () => {
    const [category, setCategory] = React.useState('index');
    const [articles, setArticles] = React.useState({
        items: [],
        categories: [],
        sources: [],
    });
    const onNavClick = (e) => {
        e.preventDefault();
        setCategory(e.currentTarget.dataset.href);
    };
    React.useEffect(() => {
        fetch(
            'https://frontend.karpovcourses.net/api/v2/ru/news/' +
                categoryIDs[category] || ''
        )
            .then((res) => res.json())
            .then((response) => {
                setArticles(response);
            });
    }, [category]);

    return (
        <>
            <div id="root"></div>
            <header className="header">
                <div className="container">
                    <Navigation
                        className="header-nav"
                        currentCategory={category}
                        onNavClick={onNavClick}
                        placement="header"
                    />
                </div>
            </header>
            <main className="main">
                <Articles articles={articles} />
            </main>
            <footer className="footer">
                <div className="container">
                    <Navigation
                        className="footer__nav"
                        currentCategory={category}
                        onNavClick={onNavClick}
                        placement="footer"
                    />

                    <div className="footer__column">
                        <p className="footer__text">
                            Все вопросы
                            <a
                                href="https://vk.com/vovirus"
                                className="footer__link"
                                target="_blank"
                            >
                                Владимир
                            </a>
                        </p>
                        <p className="footer__copy">@ 2024</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
