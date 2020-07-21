import React from 'react';

import { RightBlockContainer } from '../../StyledComponents';
import UserInfoHeader from '../UserInfoHeader';
import Wall from '../Wall';

const RightBlock = () => (
  <RightBlockContainer>
    <UserInfoHeader />
    <Wall />
  </RightBlockContainer>
);

export default RightBlock;
