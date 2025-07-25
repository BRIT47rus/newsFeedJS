import React, { FC } from 'react';
import './SmallArticle.css';
import { beautifyDate } from '../../utils';

interface ISmallArticleProps {
    title: string;
    source: string;
    date: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
export const SmallArticle: FC<ISmallArticleProps> = ({
    title,
    source,
    date,
    onClick,
}) => {
    return (
        <article className="small-article" onClick={onClick}>
            <h2 className="small-article__title">{title}</h2>
            <span className="article-date">{source}</span>
            <span className="article-source">{beautifyDate(date)}</span>
        </article>
    );
};
