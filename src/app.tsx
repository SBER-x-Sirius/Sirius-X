import React from 'react'
import Main from './pages/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Attendance from './pages/attendance'
import { Schedule } from './pages/schedule'
import Statistics from './pages/statistics'
import Header from './components/header'
import { GlobalStyle } from '../global-styled'

export const BASE_PATH = '/sirius-x'

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Header />
      <Routes>
        <Route path={BASE_PATH} element={<Main />} />
        <Route path={`${BASE_PATH}/attendance`} element={<Attendance />} />
        <Route path={`${BASE_PATH}/schedule`} element={<Schedule />} />
        <Route path={`${BASE_PATH}/statistics`} element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
