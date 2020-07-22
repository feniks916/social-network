import React from 'react';

import avatar from '../UserInfoHeader/img/main photo.png';
import photo from './img/photo.svg';
import music from './img/music.svg';
import video from './img/video.svg';
import note from './img/note.svg';
import dots from './img/dots.svg';

import {
  WallCreateArticleContainer,
  WallCreateArticleHeaderBlock,
  WallCreateArticleHeaderBlockLeft,
  AvatarMin,
  WallCreateArticleHeaderBlockLeftText,
  WallCreateArticleHeaderBlockRight,
  IconArticle,
} from '../../StyledComponents';

const WallCreateArticle = () => (
  <WallCreateArticleContainer>
    <WallCreateArticleHeaderBlock>
      <WallCreateArticleHeaderBlockLeft>
        <AvatarMin img={avatar} />
        <WallCreateArticleHeaderBlockLeftText>
          Напишите заметку или статью...
        </WallCreateArticleHeaderBlockLeftText>
      </WallCreateArticleHeaderBlockLeft>
      <WallCreateArticleHeaderBlockRight>
        <IconArticle img={photo} />
        <IconArticle img={music} />
        <IconArticle img={video} />
        <IconArticle img={note} />
        <IconArticle img={dots} />
      </WallCreateArticleHeaderBlockRight>
    </WallCreateArticleHeaderBlock>
  </WallCreateArticleContainer>
);

export default WallCreateArticle;
