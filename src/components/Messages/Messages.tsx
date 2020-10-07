/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import ScrollBar from 'react-scrollbars-custom';
import { connect, ConnectedProps } from 'react-redux';
import { Ichat } from '../../types/chat';
import LoadingBLock from '../../common/loadingBlock/LoadingBlock';
import ErrorBlock from '../../common/errorBlock/ErrorBlock';
import { RootState } from '../../redux-toolkit/store';
import moreOptionSrc from '../../img/icons/chat-more-options.svg';
import MessagesChat from '../../common/chat/messages';
import massagesClass from './Messages.module.scss';
import SubmitMessage from '../../common/chat/Submitmessage/SubmitMessage';
import PageSearchInput from '../../common/Inputs/PageSearchMasseges/PageSearchInput';
import PageWrapper from '../../common/pageWrapper';
import * as actions from '../../redux-toolkit/chatSlice';
// import {
//   getChats,
//   getGroupChats,
//   getSingleChats,
//   removeUserFromChat,
//   setTitleGroup,
// } from '../../services/chat-controller';

const scrollBarStyles = { width: '100%', height: '100%', paddingRight: 10 };

const onFilterChats = (param:string, data:Ichat[]):Ichat[] => {
  console.log(data, param);
  return data;
};

const mapStateToProps = (state:RootState) => {
  const { chats, currentChat } = state.chat;
  const { currentUser } = state.user;
  return {
    chats,
    currentChat,
    user: currentUser,
  };
};

const mapDispatch = actions;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const Messages: React.FC<Props> = ({
  chats,
  currentChat,
  loadChatsOfUser,
  loadCurrentChat,
  user,
}) => {
  const [filterChats, setFilterChats] = useState<Ichat[]>([]);

  useEffect(() => {
    setFilterChats(chats.data);
  }, [chats.data]);

  useEffect(() => {
    if (chats.data.length === 0) {
      loadChatsOfUser();
    }
  }, [chats.data.length, loadChatsOfUser]);

  useEffect(() => {
    if (currentChat.data.length === 0 && chats.data.length !== 0) {
      loadCurrentChat(chats.data[0].id);
    }
  }, [chats.data, currentChat.data.length, loadCurrentChat]);

  const renderChatList = () => {
    if (chats.loading) return <LoadingBLock />;
    if (chats.error) return <ErrorBlock errorMessage={chats.error.message} />;
    return (
      filterChats.map((chat) => (
        <button
          key={chat.id}
          className={massagesClass.selectChatElement}
          type="button"
          onClick={() => loadCurrentChat(chat.id)}
        >
          <img
            alt="avatar"
            src={chat.image}
          />
          <div className={massagesClass.selectChatUserInfo}>
            <span>{chat.title}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </button>
      )));
  };

  const renderMessages = () => {
    if (currentChat.loading) return <LoadingBLock />;
    if (currentChat.error) return <ErrorBlock />;
    return (
      currentChat.data.map((el) => {
        if (el.username === 'bogdan13') {
          return (
            <div className={massagesClass.messageWrapper} key={el.idMassage}>
              <MessagesChat messages={el.message} messagesType="our" date={el.persistDate} />
              <img alt="avatar" src={el.userSenderImage} />
            </div>
          );
        }
        return (
          <div className={massagesClass.messageWrapper} key={el.idMassage}>
            <img alt="avatar" src={el.userSenderImage} />
            <MessagesChat messages={el.message} messagesType="their" date={el.persistDate} />
          </div>
        );
      }));
  };

  return (
    <PageWrapper messages>
      <div className={massagesClass.wrapper}>
        <div className={massagesClass.selectChat}>
          <div className={massagesClass.pageSearchInputWrapper}>
            <PageSearchInput placeholder="Поиск..." action={(value) => setFilterChats(onFilterChats(value, filterChats))} />
          </div>
          <ScrollBar scrollTop={9999} style={scrollBarStyles}>
            <div className={massagesClass.selectChatElementsWrapper}>
              {renderChatList()}
            </div>
          </ScrollBar>
        </div>

        <div className={massagesClass.contentWrapper}>
          <div className={massagesClass.contentHeader}>
            <img alt="avatar" src="https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg" />
            <div className={massagesClass.contentUserInfo}>
              <span>{`${user?.firstName} ${user?.lastName}`}</span>
              {/* <p>Программист</p> */}
            </div>
          </div>

          <div className={massagesClass.content}>
            <button className={massagesClass.menu} type="button" onClick={() => console.log('menu chats')}>
              <img alt="more" src={moreOptionSrc} />
            </button>

            <div className={massagesClass.messagesWrapper}>
              <ScrollBar scrollTop={9999} style={scrollBarStyles}>
                {renderMessages()}
              </ScrollBar>
            </div>

            <div>
              <SubmitMessage onSubmitMessage={(mess) => console.log(mess)} />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default connector(Messages);
