import { Link } from 'react-router-dom';

import * as SC from './Nav.style';

const Nav = () => {
  return (
    <SC.Nav>
      <Link to='/name'>
        <SC.LinkButton>이름</SC.LinkButton>
      </Link>
      <Link to='/birthday'>
        <SC.LinkButton>생일</SC.LinkButton>
      </Link>
    </SC.Nav>
  );
};

export default Nav;
