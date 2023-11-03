import { getNavigationsValue } from '@ijl/cli';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Container, GlobalStyle } from '../global-styled';
import Header from './components/header';
import Attendance from './pages/attendance';
import Accession from './pages/attendance/accession';
import { Login } from './pages/attendance/login';
import { Meeting } from './pages/attendance/meeting';
import { NewMeeting } from './pages/attendance/new-meeting';
import { Registration } from './pages/attendance/registration';
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
              <Route path={'auth'}>
                <Route
                  index
                  element={<Navigate to={getNavigationsValue('sirius-x.attendance.auth.login')} replace />}
                />
                <Route path={'login'} element={<Login />} />
                <Route path={'registration'} element={<Registration />} />
              </Route>
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
