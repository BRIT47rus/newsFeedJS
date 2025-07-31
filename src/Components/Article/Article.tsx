import './Article.css';
import React, { useEffect, useState } from 'react';
import { RelatedSmallArticle } from '../RelatedSmallArticle/RelatedSmallArticle';
import { SingleLineTitleArticle } from '../SingleLineTitleArticle/SingleLineTitleArticle';
import { ArticleItemAPI, IArticle, ICategories, ISource, RelatedArticlesAPI } from '../../types';

import { useParams } from 'react-router-dom';
import { ArticleItemInfo } from '../ArticleItemInfo/ArticleItemInfo';

export const ArticleItem = () => {
  const { id } = useParams();
  const [articleItem, setArticleItem] = useState<ArticleItemAPI | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<IArticle[] | null>(null);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [sources, setSources] = useState<ISource[]>([]);
  useEffect(() => {
    fetch(`https://frontend.karpovcourses.net/api/v2/news/full/${id}`)
      .then((response) => response.json())
      .then(setArticleItem);
    Promise.all([
      fetch(`https://frontend.karpovcourses.net/api/v2/news/related/${id}?count=9`).then((response) => response.json()),
      fetch(`https://frontend.karpovcourses.net/api/v2/categories`).then((response) => response.json()),
      fetch(`https://frontend.karpovcourses.net/api/v2/sources`).then((response) => response.json()),
    ]).then((response) => {
      const articles: RelatedArticlesAPI = response[0];
      const categories: ICategories[] = response[1];
      const sources: ISource[] = response[2];

      setCategories(categories);
      setRelatedArticles(articles.items);
      setSources(sources);
    });
  }, [id]);

  if (articleItem === null || relatedArticles === null) {
    return null;
  }
  const renderArticleInfo = (articleItem: ArticleItemAPI) => {
    return (
      <ArticleItemInfo
        categoryName={articleItem.category.name}
        date={articleItem.date}
        source={articleItem.link}
        sourceName={articleItem.source?.name}
        author={articleItem.author}
      />
    );
  };

  return (
    <section className="article-page">
      <article className="article">
        {articleItem.image.length ? (
          <section className="article__hero" style={{ backgroundImage: `url(${articleItem.image})` }}>
            <div className="container article__hero-content">
              <div className="grid">
                <h1 className="article__hero-title">{articleItem.title}</h1>
              </div>

              {renderArticleInfo(articleItem)}
            </div>
          </section>
        ) : null}

        <div className="grid container article__main">
          <div className="article__content">
            {!articleItem.image.length && (
              <div className="article__title-container">
                <h1 className="article__title">{articleItem.title}</h1>

                {renderArticleInfo(articleItem)}
              </div>
            )}

            <p>{articleItem.text}</p>
          </div>

          <div className="article__small-column">
            {relatedArticles.slice(3, 9).map((item) => {
              const category = categories.find(({ id }) => item.category_id === id);
              const source = sources.find(({ id }) => item.source_id === id);
              console.log('side', item);
              return (
                <RelatedSmallArticle
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  category={category?.name || ''}
                  source={source?.name || ''}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </article>
      {/* ---------------------------------------------------side panel------------------------------------------------------- */}
      <section className="article-page__related-articles">
        <div className="container">
          <h2 className="article-page__related-articles-title">Читайте также:</h2>

          <div className="grid article-page__related-articles-list">
            {relatedArticles.slice(0, 3).map((item) => {
              const category = categories.find(({ id }) => item.category_id === id);
              const source = sources.find(({ id }) => item.source_id === id);
              console.log(item);
              return (
                <SingleLineTitleArticle
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  text={item.description}
                  category={category?.name || ''}
                  source={source?.name || ''}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
