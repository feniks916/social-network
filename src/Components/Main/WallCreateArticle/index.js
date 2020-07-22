import React, { useState } from 'react';

import avatar from '../UserInfoHeader/img/main photo.png';
import photo from './img/photo.svg';
import music from './img/music.svg';
import video from './img/video.svg';
import note from './img/note.svg';
import dots from './img/dots.svg';
import add from './img/add.svg';

import {
  WallCreateArticleContainer,
  WallCreateArticleHeaderBlock,
  WallCreateArticleHeaderBlockLeft,
  AvatarMin,
  WallCreateArticleHeaderBlockLeftText,
  WallCreateArticleHeaderBlockRight,
  IconArticle,
} from '../../StyledComponents';
import ArticleForm from '../ArticleForm';

const renderIcons = () => {
  const icons = [photo, music, video, note, dots];
  return icons.map((el) => <IconArticle img={el} key={el} />);
};

const WallCreateArticle = () => {
  const [isOpen, setOpen] = useState(false);

  const changeOpen = () => setOpen(false);
  const renderArticleForm = () => <ArticleForm changeOpen={changeOpen} />;
  const renderPlus = () => <IconArticle img={add} onClick={() => setOpen(true)} />;

  return (
    <WallCreateArticleContainer>
      <WallCreateArticleHeaderBlock>
        <WallCreateArticleHeaderBlockLeft>
          <AvatarMin img={avatar} />
          <WallCreateArticleHeaderBlockLeftText>
            Напишите заметку или статью...
          </WallCreateArticleHeaderBlockLeftText>
        </WallCreateArticleHeaderBlockLeft>
        <WallCreateArticleHeaderBlockRight>
          {isOpen ? renderIcons() : renderPlus()}
        </WallCreateArticleHeaderBlockRight>
      </WallCreateArticleHeaderBlock>
      {isOpen ? renderArticleForm() : null}
    </WallCreateArticleContainer>
  );
};

export default WallCreateArticle;
