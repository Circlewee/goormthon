import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Template/Header';
import { Nav } from '../../components/Template/Nav';

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
