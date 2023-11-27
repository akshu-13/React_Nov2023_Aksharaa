
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import FAQPage from './components/FAQPage';
import GalleryPage from './components/GalleryPage';
import Homepage from './components/Homepage';
import Login from './components/Login';
// import Signup from './components/Signup';
import JoinUsPage from './components/JoinUsPage';
import ReferAndEarnPage from './components/ReferAndEarnPage';
import Register from './components/Register';
import Start from './components/Start';
function App() {
  return (

  <Router>
  <div className="App">
        
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/hp" element={<Homepage/>} />
          <Route path="/Login" element={<Login/>} />
          {/* <Route path="/signup" element={<Signup/>}/> */}
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/gp" element={<GalleryPage/>}/>
          <Route path="/jp" element={<JoinUsPage/>}/>
          <Route path="/st" element={<Start/>}/>
          <Route path="/rp" element={<ReferAndEarnPage/>}/>
          <Route path="/r" element={<Register/>}/>
          </Routes>
    
      </div>
      
      </Router>
  );
};

export default App;