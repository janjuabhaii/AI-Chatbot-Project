import React, { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Dashboard } from "./pages/admin/Dashboard";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { Settings } from "./pages/admin/Settings";
import {BrowserRouter , Routes , Route, Switch} from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
        <PrimeReactProvider>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage data={landingPageData}/>} /> 
          <Route exact path='/admin-login' element={<AdminLogin />} />
          <Route exact path="/admin" element={<Dashboard />} />
          <Route exact path="/admin-settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
        </PrimeReactProvider>
  );
};

export default App;
