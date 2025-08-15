import './Article.css';
import React, { useEffect, useState } from 'react';
import { ArticleItemAPI, IArticle, ISource, RelatedArticlesAPI } from '../../types';
import { useParams } from 'react-router-dom';
import { ArticleItemInfo } from '../ArticleItemInfo/ArticleItemInfo';
import { SidebarArticleCard } from '../SideBarArticleCart/SideBarArticleCart';
import { Hero } from '../Hero/Hero';
import { ArticleCard } from '../ArticleCard/ArticleCard';

export const ArticleItem = () => {
  const { id } = useParams();
  const [articleItem, setArticleItem] = useState<ArticleItemAPI | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<IArticle[] | null>(null);
  const [sources, setSources] = useState<ISource[]>([]);
  useEffect(() => {
    fetch(`https://frontend.karpovcourses.net/api/v2/news/full/${id}`)
      .then((response) => response.json())
      .then(setArticleItem);
    Promise.all([
      fetch(`https://frontend.karpovcourses.net/api/v2/news/related/${id}?count=9`).then((response) => response.json()),
      fetch(`https://frontend.karpovcourses.net/api/v2/sources`).then((response) => response.json()),
    ]).then((response) => {
      const articles: RelatedArticlesAPI = response[0];
      const sources: ISource[] = response[1];

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
        <Hero title={articleItem.title} image={articleItem.image} className="article-page__hero" />
        <div className="grid container article__main">
          <div className="article__content">
            {renderArticleInfo(articleItem)}
            <p>{articleItem.text}</p>
          </div>
          <div className="article__sidebar">
            {relatedArticles.slice(3, 9).map((item) => {
              const source = sources.find(({ id }) => item.source_id === id);
              return (
                <SidebarArticleCard
                  className="article__sidebar-item"
                  id={item.id}
                  title={item.title}
                  source={source?.name || ''}
                  date={item.date}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </article>
      <section className="article-page__related-articles">
        <div className="container">
          <h2 className="article-page__related-articles-title">Читайте также:</h2>

          <div className="grid article-page__related-articles-list">
            {relatedArticles.slice(0, 3).map((item) => {
              const source = sources.find(({ id }) => item.source_id === id);
              return (
                <ArticleCard
                  className="article-page__related-articles-item"
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  source={source?.name}
                  date={item.date}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
