import * as SC from './Header.style';
import { logo, headerImg } from '@src/assets';

const Header = () => {
  return (
    <SC.Header>
      <SC.BackgroundImg src={headerImg} alt='background image' />
      <SC.TitleImg src={logo} alt='title image' />
      <SC.SubTitle>나만의 제주 이름 만들기</SC.SubTitle>
    </SC.Header>
  );
};

export default Header;
