
import './App.css';

import React from 'react';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './components/Contact';
import Splash from './components/Splash';
import RegisterPage from './components/RegisterPage';
import Mainscreen from './components/Mainscreen';
import Layout from "./components/Layout";
import LoginPage from './components/LoginPage';



function App() {
  return (

<div>
      
        

      <BrowserRouter>
        {/* Define your routes */}
       
        <Routes path="/" element={<Layout />}>
          
          <Route index element={<Splash/>} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Mainscreen" element={<Mainscreen />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    
      </BrowserRouter>

    
    
  </div>
    );

  }
  export default App ;
  