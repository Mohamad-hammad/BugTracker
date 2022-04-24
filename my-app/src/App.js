import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,  Route,Routes } from 'react-router-dom';

import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import CreateProject from './pages/CreateProject';
import Administration from './pages/Administration';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes >

          <Route path='/'  element={<Home/>} />
          <Route path='/Profile'  element={<Profile/>} />
          <Route path='/Administration' element={<Administration/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/CreateProject' element={<CreateProject/>} />
        </Routes >
      </Router>
    </>
  );
}

export default App;
