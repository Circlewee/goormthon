import * as SC from './Header.style';

const Header = () => {
  return (
    <SC.Header>
      <SC.BackgroundImg src='./assets/imgs/header_img.png' />
      <SC.TitleImg src='./assets/imgs/logo.png' />
      <SC.SubTitle>나만의 제주 이름 만들기</SC.SubTitle>
    </SC.Header>
  );
};

export default Header;
