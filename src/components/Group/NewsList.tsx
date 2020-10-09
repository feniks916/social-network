import React, { ReactElement } from 'react';
import NewsItem from './NewsItem';
import { NewsData } from '../../types/group';

interface Idata {
  news: NewsData[];
}

const NewsList: React.FC<Idata> = ({ news }): ReactElement => {
  const ListNews = news.map((item: NewsData) => <NewsItem key={item.id} item={item} />);
  return <>{ListNews}</>;
};
export default NewsList;
