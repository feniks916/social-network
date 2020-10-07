import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ICommentData } from '../../types/group';
import CommentsList from './CommentsList';

const Comments : React.FC<ICommentData> = ({ data }) : ReactElement => (
  <Container>
    <Heading>Комментарии</Heading>
    <CommentsList data={data} />
  </Container>
);

const Container = styled.div`
  max-height: 400px;
  padding-left: 60px;
  margin-bottom: 5px;
  padding-right: 100px;
`;

const Heading = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #515151;
  height: 125px;
  line-height: 125px;
  text-align: left;
`;
export default Comments;
