import React from 'react';

import {
  WallContainer,
  StatusContainer,
  WallInfoBlock,
  WallInfoUserAbout,
  InfoHeaderText,
  InfoHeaderTextBlock,
  InfoHeaderListItemLeft,
  InfoHeaderTextLeftBlock,
  InfoHeaderTextRightBlock,
  InfoHeaderListItemRight,
} from '../../StyledComponents';

const leftBlockItems = [
  'День рождения',
  'Образование',
  'Образование',
  'Язык',
  'Город',
  'Личная информация',
];
const rigtBlockItems = [
  '01.01.1985г.',
  'МГУ им. Ломоносова’08',
  'Frontend-разработчик',
  'Русский, английский',
  'Москва',
  'Фрилансер по жизни',
];
const Wall = () => (
  <WallContainer>
    <StatusContainer>Обновите свой статус...</StatusContainer>
    <WallInfoBlock>
      <WallInfoUserAbout>
        <InfoHeaderText>О себе</InfoHeaderText>
        <InfoHeaderTextBlock>
          <InfoHeaderTextLeftBlock>
            {leftBlockItems.map((el) => (
              <InfoHeaderListItemLeft>{el}</InfoHeaderListItemLeft>
            ))}
          </InfoHeaderTextLeftBlock>
          <InfoHeaderTextRightBlock>
            {rigtBlockItems.map((el) => (
              <InfoHeaderListItemRight>{el}</InfoHeaderListItemRight>
            ))}
          </InfoHeaderTextRightBlock>
        </InfoHeaderTextBlock>
      </WallInfoUserAbout>
    </WallInfoBlock>
  </WallContainer>
);

export default Wall;
