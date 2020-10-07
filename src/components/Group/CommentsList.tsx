/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ICommentData } from '../../types/group';
import CommentsListItem from './CommentsListItem';

const CommentsList : React.FC<ICommentData> = ({ data }) : ReactElement => (
  <Container>
    {data.map((item) => (
      <CommentsListItem
        // API отстутствует, временно key формируем так.
        // Когда с сервера будет приходить Id, заменить на него
        key={item.author + new Date().toLocaleDateString()}
        data={item}
      />
    ))}
  </Container>
);

const Container = styled.div`
  height: 210px;
`;
export default CommentsList;
