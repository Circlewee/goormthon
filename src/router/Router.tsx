import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import NamePage from '../pages/NamePage/NamePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path='/name' element={<NamePage />} />
        <Route path='*' element={<div>Error!!!</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
