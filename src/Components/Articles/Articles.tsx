import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './articles.css';
import { NewsAPI } from '../../types';
import { categoryIDs, categoryTitles } from '../../utils';
import { SidebarArticleCard } from '../SideBarArticleCart/SideBarArticleCart';
import { Hero } from '../Hero/Hero';
import { ArticleCard } from '../ArticleCard/ArticleCard';

export const Articles = () => {
  const { categoryId = 'index' } = useParams();
  const [articles, setArticles] = React.useState<NewsAPI>({
    items: [],
    categories: [],
    sources: [],
  });

  useEffect(() => {
    fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIDs[categoryId as keyof typeof categoryIDs])
      .then((res) => res.json())
      .then((response: NewsAPI) => {
        setArticles(response);
      });
  }, [categoryId]);
  return (
    <section className="articles">
      <Hero title={categoryTitles[categoryId]} image="test" className="articles__hero" />
      <div className="container grid">
        <section className="articles__content">
          {articles &&
            articles.items.slice(0, 3).map((item) => {
              const category = articles.categories.find(({ id }) => item['category_id'] === id);
              const source = articles.sources.find(({ id }) => item.source_id === id);

              return (
                <ArticleCard
                  id={item.id}
                  category={category?.name}
                  image={item.image}
                  source={source?.name}
                  description={item.description}
                  title={item.title}
                  key={item.id}
                />
              );
            })}
        </section>
        <section className="articles__sidebar">
          {articles &&
            articles.items.slice(3, 12).map((item) => {
              const source = articles.sources.find(({ id }) => item.source_id === id);

              return (
                <SidebarArticleCard
                  className="articles__sidebar-item"
                  date={item.date}
                  source={source?.name || ''}
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  image={item.image}
                />
              );
            })}
        </section>
      </div>
      {/* <div className="articles__partner-article">
        <PartnerArticle />
      </div> */}
    </section>
  );
};
