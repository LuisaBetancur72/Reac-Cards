import React, { useState } from 'react';
import './App.scss';
import Cube from './components/cube/cube';
import Contact from './components/contact/Contact.js';
import Menu from './components/menu/menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home.js';
//import Facebook from './components/Face/facebook.js';
//import Instagram from './components/Insta/instagram.js';
import Twitter from './components/twitt/twitter';
//import { TraslucetMenu } from './components/TrasMenu/TraslucetMenu';

function App() {
  

  return (
    //<TraslucetMenu></TraslucetMenu>
    
    <Router>
      <div className="App">
        <Menu/>
        <Cube/>
        
      </div>
      
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/twitter" element={<Twitter />} />
         {/* <Route path="/facebook" element={<Facebook />} />
        <Route path="/instagram" element={<Instagram />} />
         */}
        </Routes>
    </Router> 
    
  );
}

export default App;
