import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Header } from '../components/Header';
import { Nav } from '../components/Nav';
import NamePage from '../pages/NamePage/NamePage';
import BirthdayPage from '../pages/BirthdayPage/BirthdayPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path='/name' element={<NamePage />} />
        <Route path='/birthday' element={<BirthdayPage />} />
        <Route path='*' element={<Navigate to='/name' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
