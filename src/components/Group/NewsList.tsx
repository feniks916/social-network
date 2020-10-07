import React, { ReactElement } from 'react';
import NewsItem from './NewsItem';
import { INewsData } from '../../types/group';

interface Idata {
  news: INewsData[];
}

const NewsList : React.FC<Idata> = ({ news }) : ReactElement => {
  const ListNews = news.map((item: INewsData) => <NewsItem key={item.id} item={item} />);
  return <>{ListNews}</>;
};
export default NewsList;
