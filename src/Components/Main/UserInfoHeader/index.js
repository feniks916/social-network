import React from 'react';

import avatar from './img/main photo.png';
import addPhotoIcon from './img/add photo.svg';
import {
  UserInfoHeaderContainer,
  UserInfoAvatar,
  UserInfoNameBlock,
  Avatar,
  AddPhotoIcon,
  UserName,
  UserProfession,
  UserOnlineStatus,
} from '../../StyledComponents';

const UserInfoHeader = () => (
  <UserInfoHeaderContainer>
    <UserInfoAvatar>
      <Avatar img={avatar} />
      <AddPhotoIcon img={addPhotoIcon} />
    </UserInfoAvatar>
    <UserInfoNameBlock>
      <UserName>Богдан Леста</UserName>
      <UserProfession>Frontend разработчик</UserProfession>
      <UserOnlineStatus>был 20.07.2020 в 15:07</UserOnlineStatus>
    </UserInfoNameBlock>
  </UserInfoHeaderContainer>
);

export default UserInfoHeader;
