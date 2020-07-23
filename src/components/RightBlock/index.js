import React from 'react';

import { RightBlockContainer } from '../StyledComponents';
import UserInfoHeader from '../Main/UserInfoHeader';
import Wall from '../Main/Wall';

const RightBlock = () => (
  <RightBlockContainer>
    <UserInfoHeader />
    <Wall />
  </RightBlockContainer>
);

export default RightBlock;
