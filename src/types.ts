export interface NewsAPI {
  sources: ISource[];
  categories: ICategories[];
  items: IArticle[];
}
export interface ArticleItemAPI {
  id: number;
  lang: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
  text: string;
  category: ICategories;
  source: ISource;
  author?: string;
}
export interface RelatedArticlesAPI {
  items: IArticle[];
}
export interface ISource {
  id: number;
  name: string;
}
export interface ICategories {
  id: number;
  name: string;
}
export interface IArticle {
  id: number;
  lang: string;
  date: string;
  title: string;
  description: string;
  image: string;
  source_id: number;
  category_id: number;
}

export interface IPartnerArticle {
  id: string;
  title: string;
  description: string;
  text: string;
  'company-name': string;
  image: string;
}
