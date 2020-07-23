import React from 'react';

import logo from './img/H1 JMSN.svg';
import exit from './img/exit.svg';
import customization from './img/customization.svg';
import ru from './img/RU.svg';
import search from './img/search.svg';
import {
  HeaderContainer,
  Logo,
  RightBlockHeader,
  IconHeader,
  InputHeader,
  ButtonSearch,
  IconSearch,
} from '../StyledComponents';

const Header = () => (
  <HeaderContainer>
    <Logo img={logo} />
    <RightBlockHeader>
      <ButtonSearch>
        <IconSearch img={search} />
      </ButtonSearch>
      <form>
        <InputHeader type="text" />
      </form>
      <IconHeader img={ru} />
      <IconHeader img={customization} />
      <IconHeader img={exit} />
    </RightBlockHeader>
  </HeaderContainer>
);

export default Header;
