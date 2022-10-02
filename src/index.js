import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Search from './pages/Search';
import Resource from './pages/Resource';
import Help from './pages/Help';
import Account from './pages/Account';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Sresult from './pages/Sresult';
import Register from './pages/Register'
import Forgot from './pages/Forgot';
import About from './pages/About';
import AboutUs from './pages/AboutUs';
import Concordance from './pages/Concordance';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Search" element={<Search />} />
    <Route path="/Resource" element={<Resource />} />
    <Route path="/Account" element={<Account />} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Concordance" element={<Concordance/>} />
    <Route path="/Register" element={<Register/>} />
    <Route path="/Forgot" element={<Forgot/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/AboutUs" element={<AboutUs/>} />
    <Route path="/Help" element={<Help />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Sresult" element={<Sresult />} />
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
