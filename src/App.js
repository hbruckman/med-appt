import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';

import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import AppointmentFormIC from './Components/InstantConsultationBooking/AppointmentFormIC/AppointmentFormIC';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/consultations" element={<InstantConsultation />} />
          <Route path="/appointments" element={<AppointmentFormIC />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
