import './Article.css';
import React, { useEffect, useState } from 'react';
import { ArticleItemAPI, IArticle, ISource, RelatedArticlesAPI } from '../../types';
import { useParams } from 'react-router-dom';
import { SidebarArticleCard } from '../SideBarArticleCart/SideBarArticleCart';
import { Hero } from '../Hero/Hero';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { beautifyDate, categoryTitles } from '../../utils';
import { Source } from '../Source/Source';
import { Title } from '../../Title/Title';

export const ArticleItem = () => {
  const { id }: { id?: string } = useParams();
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
  // const renderArticleInfo = (articleItem: ArticleItemAPI) => {
  //   return (
  //     <ArticleItemInfo
  //       categoryName={articleItem.category.name}
  //       date={articleItem.date}
  //       source={articleItem.link}
  //       sourceName={articleItem.source?.name}
  //       author={articleItem.author}
  //     />
  //   );
  // };

  return (
    <section className="article-page">
      <Hero title={articleItem.title} image={articleItem.image} className="article-page__hero" />
      <div className="container article-page__main">
        <div className="article-page__info">
          <span className="article-page__category">{categoryTitles[articleItem.category.name]}</span>
          <span className="article-page__date">{beautifyDate(articleItem.date)}</span>
          {articleItem.link.length > 0 && (
            <Source className="article-page__source" href={articleItem.link}>
              {articleItem.source?.name}
            </Source>
          )}
        </div>

        <div className="grid">
          <div className="article-page__content">
            <p>{articleItem.text}</p>
          </div>

          <div className="article-page__sidebar">
            {relatedArticles.slice(3, 9).map((item) => {
              const source = sources.find(({ id }) => item.source_id === id);
              return (
                <SidebarArticleCard
                  className="article-page__sidebar-item"
                  date={item.date}
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  source={source?.name || ''}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </div>
      <section className="article-page__related-articles">
        <div className="container">
          <Title Component="h2" className="article-page__related-articles-title">
            Читайте также:
          </Title>

          <div className="grid article-page__related-articles-list">
            {relatedArticles.slice(0, 3).map((item) => {
              const source = sources.find(({ id }) => item.source_id === id);
              return (
                <ArticleCard
                  className="article-page__related-articles-item"
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  date={item.date}
                  source={source?.name}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
