import * as SC from './Header.style';
import { logo, headerImg } from '../../assets';

const Header = () => {
  return (
    <SC.Header>
      <SC.BackgroundImg src={headerImg} />
      <SC.TitleImg src={logo} />
      <SC.SubTitle>나만의 제주 이름 만들기</SC.SubTitle>
    </SC.Header>
  );
};

export default Header;
