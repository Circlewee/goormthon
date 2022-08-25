import { Link, useLocation } from 'react-router-dom';

import * as SC from './Nav.style';

const Nav = () => {
  const location = useLocation();

  return (
    <SC.Wrapper>
      <SC.Nav>
        <Link to='/name'>
          <SC.LinkButton selected={location.pathname === '/name'}>이름</SC.LinkButton>
        </Link>
        <Link to='/birthday'>
          <SC.LinkButton selected={location.pathname === '/birthday'}>생일</SC.LinkButton>
        </Link>
      </SC.Nav>
    </SC.Wrapper>
  );
};

export default Nav;
