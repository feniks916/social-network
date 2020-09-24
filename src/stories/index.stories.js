import React from 'react';
import { storiesOf } from '@storybook/react';

import Login from '../components/LoginPage/loginPage';
import BlockComments from '../components/Main/Articles/blockComment/BlockComments/BlockComments';
import BlockNotes from '../components/Main/Articles/blockNotes/BlockNotes';
import UserInfoHeader from '../components/Main/UserInfoHeader';
import Wall from '../components/Main/Wall';
import WallCreateArticle from '../components/Main/WallCreateArticle';
import MessagesPage from '../components/Messages';

storiesOf('Social network', module)
  .add('Страница авторизации', () => <Login />)
  .add('Страница сообщений', () => <MessagesPage />)
  .add('Блок комментариев', () => <BlockComments />)
  .add('Блок записей', () => <BlockNotes />)
  .add('Аватар', () => <UserInfoHeader />)
  .add('Стена', () => <Wall />)
  .add('Создание записи на стене', () => <WallCreateArticle />);
