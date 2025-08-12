import React, { FC } from 'react';
import './PartnerArticle.css';
// import { getMainPartnerArticle } from '../../api';
// import { IPartnerArticle } from '../../types';

export const PartnerArticle: FC = () => {
  // const [article, setArticle] = useState<IPartnerArticle | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     const article = await getMainPartnerArticle();

  //     setArticle(article);
  //   })();
  // }, []);

  // if (!article) {
  //   return null;
  // }

  return (
    <section className="partner-article">
      <div className="container grid">
        <div className="partner-article__image-container">
          <img className="partner-article__image" src="https://picsum.photos/600/600" alt="" />
        </div>
        <div className="partner-article__content">
          <span className="partner-article__caption">Партнерский материал от </span>
          <h2 className="partner-article__title"></h2>
          <p className="partner-article__text"></p>
        </div>
      </div>
    </section>
  );
};
