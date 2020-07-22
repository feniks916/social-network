import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Player from './Player';

const Wrapper = styled.div`
  max-width: 280px;
  width: 100%;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  margin: 0 0 40px 0;
`;
const ItemLink = styled(Link)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:hover {
    color: #ffb11b;
  }
`;

const Sidebar = () => (
  <Wrapper>
    <List>
      <ItemLink to="#">Моя страница</ItemLink>
      <ItemLink to="#">Друзья</ItemLink>
      <ItemLink to="#">Сообщения</ItemLink>
      <ItemLink to="#">Новости</ItemLink>
      <ItemLink to="#">Закладки</ItemLink>
      <ItemLink to="#">Группы</ItemLink>
      <ItemLink to="#">Фотографии</ItemLink>
      <ItemLink to="#">Видеозаписи</ItemLink>
      <ItemLink to="#">Аудиозаписи</ItemLink>
      <ItemLink to="#">Настройки</ItemLink>
    </List>
    <Player />
  </Wrapper>
);

export default Sidebar;
