import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, GlobalStyle } from '../global-styled';
import Header from './components/header';
import Attendance from './pages/attendance';
import { Accession } from './pages/attendance/accession';
import { Meeting } from './pages/attendance/meeting';
import { NewMeeting } from './pages/attendance/new-meeting';
import { Users } from './pages/attendance/users';
import Main from './pages/main';
import { Schedule } from './pages/schedule';
import Statistics from './pages/statistics';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Header />
        <Routes>
          <Route path={'sirius-x'}>
            <Route index element={<Main />} />
            <Route path={'attendance'}>
              <Route index element={<Attendance />} />
              <Route path={'accession'} element={<Accession />} />
              <Route path={'new-meeting'} element={<NewMeeting />} />
              <Route path={'meeting/:meetingId'} element={<Meeting />} />
              <Route path={'users'} element={<Users />} />
            </Route>
            <Route path={'schedule'} element={<Schedule />} />
            <Route path={'statistics'} element={<Statistics />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
