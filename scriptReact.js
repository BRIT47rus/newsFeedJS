const categoryIDs = {
    index: 0,
    fashion: 3,
    tech: 1,
    sport: 2,
    politics: 4,
};
const categoryNames = {
    index: 'Главная',
    fashion: 'Мода',
    tech: 'Технологии',
    sport: 'Спорт',
    politics: 'Политика',
};

const App = () => {
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
                            {[
                                'index',
                                'fashion',
                                'tech',
                                'sport',
                                'politics',
                            ].map((item, index) => {
                                return (
                                    <li className="navigation__item" key={item}>
                                        <a
                                            onClick={onNavClick}
                                            data-href={item}
                                            href="#"
                                            className={`navigation__link ${
                                                category === item
                                                    ? 'navigation__link--active'
                                                    : ''
                                            }`}
                                        >
                                            {categoryNames[item]}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="main">
                <section className="articles">
                    <div className="container grid">
                        <section className="articles__big-column">
                            {articles &&
                                articles.items.slice(0, 3).map((item) => {
                                    return (
                                        <article
                                            className="main-article"
                                            key={item.title}
                                        >
                                            <div className="main-article__image-container">
                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    className="main-article__img"
                                                />
                                            </div>
                                            <div className="main-article__content">
                                                <span className="article-category main--article__category">
                                                    {articles.categories.find(
                                                        (id) =>
                                                            item.category_id ===
                                                            id
                                                    )}
                                                </span>
                                                <h2 className="main-article__tittle">
                                                    {item.title}
                                                </h2>
                                                <p className="main--article__text">
                                                    {item.description}
                                                </p>
                                                <span className="article-source main-article__source">
                                                    {articles.sources.find(
                                                        (id) =>
                                                            item.source_id ===
                                                            id
                                                    )}
                                                </span>
                                            </div>
                                        </article>
                                    );
                                })}
                        </section>
                        <section className="articles__small-column"></section>
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
                            {[
                                'index',
                                'fashion',
                                'tech',
                                'sport',
                                'politics',
                            ].map((item, index) => {
                                return (
                                    <li className="navigation__item" key={item}>
                                        <a
                                            onClick={onNavClick}
                                            data-href={item}
                                            href="#"
                                            className={`navigation__link ${
                                                category === item
                                                    ? 'navigation__link--active'
                                                    : ''
                                            }`}
                                        >
                                            {categoryNames[item]}
                                        </a>
                                    </li>
                                );
                            })}
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
