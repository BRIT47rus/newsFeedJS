// import './ArticleItemInfo';
import React from 'react';
import './ArticleItemInfo.css';
import { beautifyDate } from '../../utils';
interface Props {
  categoryName: string;
  date: string;
  source?: string;
  sourceName?: string;
  author?: string;
}

export const ArticleItemInfo = ({ categoryName, date, author, source, sourceName }: Props) => {
  return (
    <div className="grid">
      <div className="article-item-info__category-container">
        <span className="article-category article--item-info__category">{categoryName}</span>
        {source && (
          <a href={source} className="article-item-info__link" target="_blank" rel="noreferrer">
            Источник: {sourceName}
            {author && <span className="article-item-info__author">{author}</span>}
          </a>
        )}

        <span className="article-date article__date">{beautifyDate(date)}</span>
      </div>
    </div>
  );
};
//3-22 4-4
