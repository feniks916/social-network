import React from 'react';
import Header from '../Header';
import LeftBlock from '../LeftBlock';
import RightBlock from '../RightBlock';
import { MainContainer } from '../StyledComponents';

function Main() {
  return (
    <>
      <Header />
      <MainContainer>
        <LeftBlock />
        <RightBlock />
      </MainContainer>
    </>
  );
}

export default Main;
