const App = () => {
    const [category, setCategory] = React.useState('index');
    const [articles, setArticles] = React.useState({
        articles: [],
        categories: [],
        sources: [],
    });
    const onNavClick = (e) => {
        e.preventDefault();
        setCategory(e.currentTarget.dataset.href);
    };
    console.log(category);
    return (
        <>
            <div id="root"></div>
            <header className="header">
                <div className="container">
                    <nav className="navigation grid header-nav">
                        <a
                            onClick={onNavClick}
                            href="./index.html"
                            className="navigation__logo"
                        >
                            <img
                                className="navigation__image"
                                src="./image/logo.svg"
                                alt=""
                            />
                        </a>
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <a
                                    onClick={onNavClick}
                                    data-href="index"
                                    href="./index.html"
                                    className={`navigation__link ${
                                        category === 'index'
                                            ? 'navigation__link--active'
                                            : ''
                                    }`}
                                >
                                    ГЛАВНАЯ
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    onClick={onNavClick}
                                    data-href="fashion"
                                    href="./fashion.html"
                                    className={`navigation__link ${
                                        category === 'fashion'
                                            ? 'navigation__link--active'
                                            : ''
                                    }`}
                                >
                                    МОДА
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    onClick={onNavClick}
                                    data-href="tech"
                                    href="./tech.html"
                                    className={`navigation__link ${
                                        category === 'tech'
                                            ? 'navigation__link--active'
                                            : ''
                                    }`}
                                >
                                    ТЕХНОЛОГИИ
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    onClick={onNavClick}
                                    data-href="politics"
                                    href="./politics.html"
                                    className={`navigation__link ${
                                        category === 'politics'
                                            ? 'navigation__link--active'
                                            : ''
                                    }`}
                                >
                                    политика
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    onClick={onNavClick}
                                    data-href="sport"
                                    href="./sport.html"
                                    className={`navigation__link ${
                                        category === 'sport'
                                            ? 'navigation__link--active'
                                            : ''
                                    }`}
                                >
                                    спорт
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="main">
                <section className="articles">
                    <div className="container grid">
                        <section className="articles__big-column">
                            <article className="main-article">
                                <div className="main-article__image-container">
                                    <img
                                        src="./image/2.png"
                                        alt=""
                                        className="main-article__img"
                                    />
                                </div>
                                <div className="main-article__content">
                                    <span className="article-category main--article__category">
                                        ТЕХНОЛОГИИ
                                    </span>
                                    <h2 className="main-article__tittle">
                                        Отец жанра. Как уже забытый трип-хоп
                                        определяет самую популяр…
                                    </h2>
                                    <p className="main--article__text">
                                        Новая мода на топовые наряды необычных
                                        цветов. В сезоне – топики,
                                        шорты-боксеры, сланцы и сандалии. А
                                        также большие солнечные очки и яркая
                                        шляпка.
                                    </p>
                                    <span className="article-source main-article__source">
                                        ИСТОЧНИК
                                    </span>
                                </div>
                            </article>
                            <article className="main-article">
                                <div className="main-article__image-container">
                                    <img
                                        src="./image/3.png"
                                        alt=""
                                        className="main-article__img"
                                    />
                                </div>
                                <div className="main-article__content">
                                    <span className="article-category main--article__category">
                                        ТЕХНОЛОГИИ
                                    </span>
                                    <h2 className="main-article__tittle">
                                        Отец жанра. Как уже забытый трип-хоп
                                        определяет самую популяр…
                                    </h2>
                                    <p className="main--article__text">
                                        Новая мода на топовые наряды необычных
                                        цветов. В сезоне – топики,
                                        шорты-боксеры, сланцы и сандалии. А
                                        также большие солнечные очки и яркая
                                        шляпка.
                                    </p>
                                    <span className="article-source main-article__source">
                                        ИСТОЧНИК
                                    </span>
                                </div>
                            </article>
                            <article className="main-article">
                                <div className="main-article__image-container">
                                    <img
                                        src="./image/1.png"
                                        alt=""
                                        className="main-article__img"
                                    />
                                </div>
                                <div className="main-article__content">
                                    <span className="article-category main--article__category">
                                        ТЕХНОЛОГИИ
                                    </span>
                                    <h2 className="main-article__tittle">
                                        Отец жанра. Как уже забытый трип-хоп
                                        определяет самую популяр…
                                    </h2>
                                    <p className="main--article__text">
                                        Новая мода на топовые наряды необычных
                                        цветов. В сезоне – топики,
                                        шорты-боксеры, сланцы и сандалии. А
                                        также большие солнечные очки и яркая
                                        шляпка.
                                    </p>
                                    <span className="article-source main-article__source">
                                        ИСТОЧНИК
                                    </span>
                                </div>
                            </article>
                        </section>
                        <section className="articles__small-column">
                            <article className="articles-small">
                                <h2 className="articles__small-tittle">
                                    В американском зоопарке празднуют рождение
                                    гориллы: видео
                                </h2>
                                <p className="articles-small__caption">
                                    <span className="articles-small__date article-date">
                                        12 ИЮЛЯ{' '}
                                    </span>
                                    <span className="articles-small__source article-source">
                                        ИСТОЧНИК
                                    </span>
                                </p>
                            </article>
                            <article className="articles-small">
                                <h2 className="articles__small-tittle">
                                    В американском зоопарке празднуют рождение
                                    гориллы: видео
                                </h2>
                                <p className="articles-small__caption">
                                    <span className="articles-small__date article-date">
                                        12 ИЮЛЯ{' '}
                                    </span>
                                    <span className="articles-small__source article-source">
                                        ИСТОЧНИК
                                    </span>
                                </p>
                            </article>
                            <article className="articles-small">
                                <h2 className="articles__small-tittle">
                                    В американском зоопарке празднуют рождение
                                    гориллы: видео
                                </h2>
                                <p className="articles-small__caption">
                                    <span className="articles-small__date article-date">
                                        12 ИЮЛЯ{' '}
                                    </span>
                                    <span className="articles-small__source article-source">
                                        ИСТОЧНИК
                                    </span>
                                </p>
                            </article>
                            <article className="articles-small">
                                <h2 className="articles__small-tittle">
                                    В американском зоопарке празднуют рождение
                                    гориллы: видео
                                </h2>
                                <p className="articles-small__caption">
                                    <span className="articles-small__date article-date">
                                        12 ИЮЛЯ{' '}
                                    </span>
                                    <span className="articles-small__source article-source">
                                        ИСТОЧНИК
                                    </span>
                                </p>
                            </article>
                            <article className="articles-small">
                                <h2 className="articles__small-tittle">
                                    В американском зоопарке празднуют рождение
                                    гориллы: видео
                                </h2>
                                <p className="articles-small__caption">
                                    <span className="articles-small__date article-date">
                                        12 ИЮЛЯ{' '}
                                    </span>
                                    <span className="articles-small__source article-source">
                                        ИСТОЧНИК
                                    </span>
                                </p>
                            </article>
                            <article className="articles-small">
                                <h2 className="articles__small-tittle">
                                    В американском зоопарке празднуют рождение
                                    гориллы: видео
                                </h2>
                                <p className="articles-small__caption">
                                    <span className="articles-small__date article-date">
                                        12 ИЮЛЯ{' '}
                                    </span>
                                    <span className="articles-small__source article-source">
                                        ИСТОЧНИК
                                    </span>
                                </p>
                            </article>
                            <article className="articles-small">
                                <h2 className="articles__small-tittle">
                                    В американском зоопарке празднуют рождение
                                    гориллы: видео
                                </h2>
                                <p className="articles-small__caption">
                                    <span className="articles-small__date article-date">
                                        12 ИЮЛЯ{' '}
                                    </span>
                                    <span className="articles-small__source article-source">
                                        ИСТОЧНИК
                                    </span>
                                </p>
                            </article>
                            <article className="articles-small">
                                <h2 className="articles__small-tittle">
                                    В американском зоопарке празднуют рождение
                                    гориллы: видео
                                </h2>
                                <p className="articles-small__caption">
                                    <span className="articles-small__date article-date">
                                        12 ИЮЛЯ{' '}
                                    </span>
                                    <span className="articles-small__source article-source">
                                        ИСТОЧНИК
                                    </span>
                                </p>
                            </article>
                            <article className="articles-small">
                                <h2 className="articles__small-tittle">
                                    В американском зоопарке празднуют рождение
                                    гориллы: видео
                                </h2>
                                <p className="articles-small__caption">
                                    <span className="articles-small__date article-date">
                                        12 ИЮЛЯ{' '}
                                    </span>
                                    <span className="articles-small__source article-source">
                                        ИСТОЧНИК
                                    </span>
                                </p>
                            </article>
                        </section>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="container">
                    <nav className="navigation grid footer__nav">
                        <a href="#" className="navigation__logo">
                            <img
                                className="navigation__image"
                                src="./image/logo.svg"
                                alt=""
                            />
                        </a>
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <a
                                    onClick={onNavClick}
                                    data-href="index"
                                    href="./index.html"
                                    className={`navigation__link ${
                                        category === 'index'
                                            ? 'navigation__link--active'
                                            : ''
                                    }`}
                                >
                                    ГЛАВНАЯ
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    onClick={onNavClick}
                                    data-href="fashion"
                                    href="./fashion.html"
                                    className={`navigation__link ${
                                        category === 'fashion'
                                            ? 'navigation__link--active'
                                            : ''
                                    }`}
                                >
                                    МОДА
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    onClick={onNavClick}
                                    data-href="tech"
                                    href="./tech.html"
                                    className={`navigation__link ${
                                        category === 'tech'
                                            ? 'navigation__link--active'
                                            : ''
                                    }`}
                                >
                                    ТЕХНОЛОГИИ
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    onClick={onNavClick}
                                    data-href="politics"
                                    href="./politics.html"
                                    className={`navigation__link ${
                                        category === 'politics'
                                            ? 'navigation__link--active'
                                            : ''
                                    }`}
                                >
                                    политика
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a
                                    onClick={onNavClick}
                                    data-href="sport"
                                    href="./sport.html"
                                    className={`navigation__link ${
                                        category === 'sport'
                                            ? 'navigation__link--active'
                                            : ''
                                    }`}
                                >
                                    спорт
                                </a>
                            </li>
                        </ul>
                    </nav>
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
ReactDOM.render(<App />, document.getElementById('root'));
