import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import sendMessageSrc from '../../../images/icons/send-message.svg';
import addFileSrc from '../../../images/icons/add-file.svg';

const { TextArea } = Input;
const ChatSubmitMessageWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const ChatSubmitMessageText = styled(TextArea)`
  display: flex;
  flex-grow: 1;
  background: #fff5e3;
  border-radius: 15px;
  padding: 10px 40px 15px 15px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  resize: none;
  line-height: 20px;
  height: 20px;

  background-image: url(${addFileSrc});
  background-repeat: no-repeat;
  background-position: calc(100% - 25px) center;

  &:focus {
    box-shadow: 0 0 0 2pt red;
    border: none;
    outline: none;
    box-shadow: 0 0 2pt 1pt #ffb11b;
  }
`;
const ChatSubmitMessageIcon = styled.img`
  margin-left: 25px;
`;

export default () => (
  <ChatSubmitMessageWrap>
    <ChatSubmitMessageText placeholder="Напишите что-нибудь..." />
    <ChatSubmitMessageIcon src={sendMessageSrc} />
  </ChatSubmitMessageWrap>
);
