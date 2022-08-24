import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NamePage from '../pages/NamePage/NamePage';
import BirthdayPage from '../pages/BirthdayPage/BirthdayPage';
import ResultPage from '../pages/ResultPage/ResultPage';
import MainPage from '../pages/MainPage/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<MainPage />}>
          <Route path='name' element={<NamePage />} />
          <Route path='birthday' element={<BirthdayPage />} />
          <Route path='*' element={<Navigate to='/name' />} />
        </Route>
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
