import React from 'react';
import Main from './pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Attendance from './pages/attendance';
import Schedule from './pages/schedule';
import Statistics from './pages/statistics';
import Header from './components/header';

const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/sirius-x" element={<Main />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
