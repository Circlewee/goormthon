import { useState, useEffect } from 'react';

import * as SC from './Header.style';
import { logo } from 'src/assets';
import { HeaderImg } from 'src/assets/svg';

const Header = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsImageLoaded(true);
    image.src = logo;

    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <SC.Header>
      <SC.BackgroundImg src={HeaderImg} alt='background image' />
      {!isImageLoaded ? (
        <SC.ReplaceTitle>제주일름</SC.ReplaceTitle>
      ) : (
        <SC.TitleImg src={logo} alt='title image' />
      )}
      <SC.SubTitle>나만의 제주 이름 만들기</SC.SubTitle>
    </SC.Header>
  );
};

export default Header;
