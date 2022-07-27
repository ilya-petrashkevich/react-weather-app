import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Forecast from '../../pages/Forecast';
import Today from '../../pages/Today';

const AppRoutes = () => {

  return (
    <Routes>
      <Route path='today' element={<Today/>} />
      <Route path='fiveDays' element={<Forecast/>} />
      <Route path='*' element={<Today/>} />
    </Routes>
  )

}

export default AppRoutes;