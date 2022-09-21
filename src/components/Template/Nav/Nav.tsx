import { useLocation } from 'react-router-dom';

import * as SC from './Nav.style';

const Nav = () => {
  const location = useLocation();

  return (
    <SC.Nav>
      <SC.Wrapper>
        <SC.StyledLink to='/name' selected={location.pathname === '/name'}>
          <SC.LinkButton selected={location.pathname === '/name'}>이름</SC.LinkButton>
        </SC.StyledLink>
        <SC.StyledLink to='/birthday' selected={location.pathname === '/birthday'}>
          <SC.LinkButton selected={location.pathname === '/birthday'}>생일</SC.LinkButton>
        </SC.StyledLink>
      </SC.Wrapper>
    </SC.Nav>
  );
};

export default Nav;
