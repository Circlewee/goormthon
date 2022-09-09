import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';

const Template = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
};

export default Template;
