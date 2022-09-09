import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { NamePage } from '../pages/NamePage';
import { BirthdayPage } from '../pages/BirthdayPage';
import { ResultPage } from '../pages/ResultPage';
import { Template } from '../pages/Template';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Template />}>
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
