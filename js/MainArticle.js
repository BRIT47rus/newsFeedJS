export const MainArticle = ({
    title,
    image,
    category,
    description,
    source,
}) => {
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
