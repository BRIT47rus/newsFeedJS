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

const MainArticle = ({ title, image, category, description, source }) => {
    return (
        <article className="main-article">
            <div className="main-article__image-container">
                <img src={image} alt="" className="main-article__img" />
            </div>
            <div className="main-article__content">
                <span className="article-category main--article__category">
                    {category}
                </span>
                <h2 className="main-article__tittle">{title}</h2>
                <p className="main--article__text">{description}</p>
                <span className="article-source main-article__source">
                    {source}
                </span>
            </div>
        </article>
    );
};
const SmallArticle = ({ title, source, date }) => {
    return (
        <article className="articles-small">
            <h2 className="articles__small-tittle">{title}</h2>

            <span className="articles-small__date article-date">
                {new Date(date).toLocaleString('ru-Ru', {
                    day: '2-digit',
                    month: 'long',
                })}
            </span>
            <span className="articles-small__source article-source">
                {source}
            </span>
        </article>
    );
};
const Navigation = ({ onNavClick, currentCategory, className = '' }) => {
    return (
        <nav className={`navigation grid  ${className} `}>
            <a data-href="index" href="#" className="navigation__logo">
                <img
                    className="navigation__image"
                    src="./image/logo.svg"
                    alt=""
                />
            </a>
            <ul className="navigation__list">
                {['index', 'fashion', 'tech', 'sport', 'politics'].map(
                    (item, index) => {
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
                    <Navigation
                        className="header-nav"
                        currentCategory={category}
                        onNavClick={onNavClick}
                    />
                </div>
            </header>
            <main className="main">
                <section className="articles">
                    <div className="container grid">
                        <section className="articles__big-column">
                            {articles &&
                                articles.items.slice(0, 3).map((item) => {
                                    return (
                                        <MainArticle
                                            category={
                                                articles.categories.find(
                                                    ({ id }) =>
                                                        item['category_id'] ===
                                                        id
                                                ).name || ''
                                            }
                                            image={item.image}
                                            source={
                                                articles.sources.find(
                                                    ({ id }) =>
                                                        item.source_id === id
                                                ).name
                                            }
                                            description={item.description}
                                            title={item.title}
                                            key={item.title}
                                        />
                                    );
                                })}
                        </section>
                        <section className="articles__small-column">
                            {articles.items.slice(3, 12).map((item) => (
                                <SmallArticle
                                    date={item.date}
                                    source={
                                        articles.sources.find(
                                            ({ id }) => item.source_id === id
                                        ).name
                                    }
                                    key={item.title}
                                    title={item.title}
                                />
                            ))}
                        </section>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="container">
                    <Navigation
                        className="footer-nav"
                        currentCategory={category}
                        onNavClick={onNavClick}
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
ReactDOM.render(<App />, document.getElementById('root'));
