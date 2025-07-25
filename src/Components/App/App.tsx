import React, { useState } from 'react';
import './App.css';
import { categoryIDs } from '../../utils';
import { Articles } from '../Articles/Articles';
import { ArticleItem } from '../Article/Article';
import { Navigation } from '../Navigation/Navigation';
import { NewsAPI } from '../../types';
export const App = () => {
    const [articleId, setArticleId] = useState<number | null>(null);
    const [category, setCategory] = React.useState<string>('index');
    const [articles, setArticles] = React.useState<NewsAPI>({
        items: [],
        categories: [],
        sources: [],
    });
    const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setArticleId(null);
        const category = e.currentTarget.dataset.href;
        if (category) {
            setCategory(category);
        }
    };
    const onArticleClick = (id: number) => {
        setArticleId(id);
    };
    React.useEffect(() => {
        fetch(
            'https://frontend.karpovcourses.net/api/v2/ru/news/' +
                categoryIDs[category] || ''
        )
            .then((res) => res.json())
            .then((response: NewsAPI) => {
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
                    <ArticleItem />
                ) : (
                    <ArticleItem articles={articles} />
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
