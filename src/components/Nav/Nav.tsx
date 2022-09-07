import { useRouter } from 'next/router';
import Link from 'next/link';

import * as SC from './Nav.style';

const Nav = () => {
  const router = useRouter();

  return (
    <SC.Wrapper>
      <SC.Nav>
        <Link href='/name'>
          <SC.LinkButton selected={router.asPath === '/name'}>이름</SC.LinkButton>
        </Link>
        <Link href='/birthday'>
          <SC.LinkButton selected={router.asPath === '/birthday'}>생일</SC.LinkButton>
        </Link>
      </SC.Nav>
    </SC.Wrapper>
  );
};

export default Nav;
