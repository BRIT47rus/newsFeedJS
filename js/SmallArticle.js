export const SmallArticle = ({ title, source, date }) => {
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
