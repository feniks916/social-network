import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const ModalChatUserInfo = styled.div`
  width: 60px;
`;

const ModalChatUserImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const ModalChatUserName = styled.div`
  color: #000000;
  font-size: 12px;
  font-weight: 500;
  font-family: Montserrat;
  text-align: center;
`;

const MessageAuthor = ({ img, name }) => (
  <ModalChatUserInfo>
    <ModalChatUserImg src={img} />
    <ModalChatUserName>{name}</ModalChatUserName>
  </ModalChatUserInfo>
);

export default MessageAuthor;

MessageAuthor.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

MessageAuthor.defaultProps = {
  img: null,
  name: null,
};
