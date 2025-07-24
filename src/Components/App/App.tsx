import React, { useState } from 'react';
import './App.css';
import { categoryIDs } from '../../utils';
import { Articles } from '../Articles/Articles';
import { Navigation } from '../Navigation/Navigation';
export const App = () => {
    const [articleId, setArticleId] = useState(null);
    const [category, setCategory] = React.useState('index');
    const [articles, setArticles] = React.useState({
        items: [],
        categories: [],
        sources: [],
    });
    const onNavClick = (e) => {
        e.preventDefault();
        setArticleId(null);
        setCategory(e.currentTarget.dataset.href);
    };
    const onArticleClick = (id) => {
        setArticleId(id);
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
                {articleId !== null ? (
                    <Article />
                ) : (
                    <Articles articles={articles} />
                )}
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
