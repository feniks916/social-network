import React from 'react';

import logo from './img/H1 JMSN.svg';
import exit from './img/exit.svg';
import customization from './img/customization.svg';
import ru from './img/RU.svg';
import { HeaderContainer, Logo, RightBlockHeader, IconHeader } from '../StyledComponents';

const Header = () => (
  <HeaderContainer>
    <Logo img={logo} />
    <RightBlockHeader>
      <IconHeader img={ru} />
      <IconHeader img={customization} />
      <IconHeader img={exit} />
    </RightBlockHeader>
  </HeaderContainer>
);

export default Header;
