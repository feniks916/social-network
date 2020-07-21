import React from 'react';

import avatar from './img/main photo.png';
import addPhotoIcon from './img/add photo.svg';
import {
  UserInfoHeaderContainer,
  UserInfoAvatar,
  UserInfoName,
  Avatar,
  AddPhotoIcon,
} from '../../StyledComponents';

const UserInfoHeader = () => (
  <UserInfoHeaderContainer>
    <UserInfoAvatar>
      <Avatar img={avatar} />
      <AddPhotoIcon img={addPhotoIcon} />
    </UserInfoAvatar>
    <UserInfoName />
  </UserInfoHeaderContainer>
);

export default UserInfoHeader;
