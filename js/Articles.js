import { MainArticle } from './MainArticle.js';
import { SmallArticle } from './SmallArticle.js';

export const Articles = ({ articles }) => {
    return (
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
                                                item['category_id'] === id
                                        ).name || ''
                                    }
                                    image={item.image}
                                    source={
                                        articles.sources.find(
                                            ({ id }) => item.source_id === id
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
    );
};
