export const categoryIDs = {
  index: 0,
  fashion: 3,
  tech: 1,
  sport: 2,
  politics: 4,
};

export const categoryNames = {
  index: 'Главная',
  fashion: 'Мода',
  tech: 'Технологии',
  sport: 'Спорт',
  politics: 'Политика',
};
export const beautifyDate = (date: string): string =>
  new Date(date).toLocaleString('ru-RU', {
    month: 'long',
    day: 'numeric',
  });
