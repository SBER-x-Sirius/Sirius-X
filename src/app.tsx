import React from 'react';
import Main from './pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Attendance from './pages/attendance';
import { Schedule } from './pages/schedule';
import Statistics from './pages/statistics';
import Header from './components/header';
import { GlobalStyle, Container } from '../global-styled';
import { useGetAllUsersQuery } from './store/api/attendance/user';

export const BASE_PATH = '/sirius-x';

const App = () => {
  const { data } = useGetAllUsersQuery();

  return (
    <BrowserRouter>
      <GlobalStyle />
        <Container>
          <Header />
          <Routes>
            <Route path={BASE_PATH} element={<Main />} />
            <Route path={`${BASE_PATH}/attendance`} element={<Attendance />} />
            <Route path={`${BASE_PATH}/schedule`} element={<Schedule />} />
            <Route path={`${BASE_PATH}/statistics`} element={<Statistics />} />
          </Routes>
        </Container>
        <pre>{JSON.stringify(data, null, 4)}</pre>
    </BrowserRouter>
  );
};

export default App;
