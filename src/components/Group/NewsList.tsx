import React from 'react';
import NewsItem from './NewsItem';

interface Idata {
  data: {
    data: {
      news: Inews[];
    };
  };
}

interface Inews {
  id: number;
  title: string;
  img: string;
  text: string;
  tags: string[];
  author: string;
  time: string;
  favoritesCount: number;
  likesCount: number;
  commentsCount: number;
  repostsCount: number;
}

interface Inews2 {
  countBookmarks: number;
  countComments: number;
  countLikes: number;
  countReposts: number;
  id: number;
  lastRedactionDate: string;
  media: [];
  persistDate: string;
  tags: [];
  text: string;
  title: string;
}

const NewsList = ({ news }: any) => {
  console.log(news);
  const ListNews = news.map((item: any) => <NewsItem key={item.id} item={item} />);
  return <>{ListNews}</>;
};
export default NewsList;
