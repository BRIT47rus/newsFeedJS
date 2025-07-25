import React, { FC } from 'react';
import './articles.css';
import { MainArticle } from '../MainArticle/MainArticle';
import { SmallArticle } from '../SmallaArticles/SmallArticle';
import { NewsAPI } from '../../types';
interface ArticlesProps {
    articles: NewsAPI;
    onArticleClick: (id: number) => void;
}
export const Articles: FC<ArticlesProps> = ({ articles, onArticleClick }) => {
  return (
    <section className="articles">
      <div className="container grid">
        <section className="articles__big-column">
          {articles &&
                        articles.items.slice(0, 3).map((item) => {
                          const category = articles.categories.find(
                            ({ id }) => item['category_id'] === id
                          );
                          const source = articles.sources.find(
                            ({ id }) => item.source_id === id
                          );

                          return (
                            <MainArticle
                              onClick={() => onArticleClick(item.id)}
                              category={category ? category.name : ''}
                              image={item.image}
                              source={source?.name || ''}
                              description={item.description}
                              title={item.title}
                              key={item.title}
                            />
                          );
                        })}
        </section>
        <section className="articles__small-column">
          {articles.items.slice(3, 12).map((item) => {
            const source = articles.sources.find(
              ({ id }) => item.source_id === id
            );

            return (
              <SmallArticle
                onClick={() => onArticleClick(item.id)}
                date={item.date}
                source={source?.name || ''}
                key={item.title}
                title={item.title}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};
