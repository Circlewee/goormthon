import { Header } from '../Header';
import { Nav } from '../Nav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Nav />
      {children}
    </>
  );
};

export default Layout;
