import styled from 'styled-components';
import React from 'react';
import ScrollBar from 'react-scrollbars-custom';
import Author from './message-author';
import Messages from '../chat/messages';
import SubmitMessage from '../chat/message-author';

const ModalChatWrapper = styled.div`
  height: 870px;
  width: 476px;
  margin: 0px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ModalChatHeader = styled.div`
  height: 112px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffb11b;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
`;

const ModalChatContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 406px;
  padding: 35px;
  background-color: #ffffff;
  height: 560px;
  overflow-y: scroll;
  overflow: hidden;
`;

const ModalChatMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 35px;
`;

const ModalChatSubmitMessageWrap = styled.div`
  margin: 30px;
`;

const testData = [
  {
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '12:55',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    username: 'stefan2233',
    name: 'Стефан',
    messages: 'Nulla in metus dictum, dapibus justo sit amet, tristique purus',
    dateSend: '05/06/20',
    timeSend: '12:56',
    image: 'https://stuki-druki.com/biofoto2/stepan-pivkin-01.jpg',
  },
  {
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://www.meme-arsenal.com/memes/b5397c380e660b6e60fd9b86f0a18709.jpg',
  },
  {
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://www.meme-arsenal.com/memes/b5397c380e660b6e60fd9b86f0a18709.jpg',
  },
  {
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://www.meme-arsenal.com/memes/b5397c380e660b6e60fd9b86f0a18709.jpg',
  },
  {
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
];

const groupMessagesByUser = testData.reduce((acc, el) => {
  const lastAccElement = acc[acc.length - 1];
  const lastAccIndex = acc.length - 1;

  const initialMessagesArray = { ...el, messages: [el.messages] };
  if (lastAccElement === undefined) return [initialMessagesArray];

  if (lastAccElement.username === el.username) {
    const newObject = {
      ...acc[lastAccIndex],
      messages: [...acc[lastAccIndex].messages, el.messages],
    };
    return [...acc.splice(0, lastAccIndex), newObject];
  }
  return [...acc, initialMessagesArray];
}, []);

const ModalChat = () => {
  const renderMessages = () =>
    groupMessagesByUser.map((el) => {
      if (el.username === 'bogdan13') {
        return (
          <ModalChatMessageWrapper>
            <Messages messages={el.messages} messagesType="our" />
            <Author img={el.image} name={el.name} />
          </ModalChatMessageWrapper>
        );
      }
      return (
        <ModalChatMessageWrapper>
          <Author img={el.image} name={el.name} />
          <Messages messages={el.messages} messagesType="their" />
        </ModalChatMessageWrapper>
      );
    });

  return (
    <ModalChatWrapper>
      <ModalChatHeader>Чат JMSN</ModalChatHeader>
      <ModalChatContent>
        <ScrollBar style={{ width: '100%', height: '100%', paddingRight: 35 }}>
          {renderMessages()}
        </ScrollBar>
      </ModalChatContent>
      <ModalChatSubmitMessageWrap>
        <SubmitMessage />
      </ModalChatSubmitMessageWrap>
    </ModalChatWrapper>
  );
};

export default ModalChat;
