import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Objects from './components/Objects';
import Header from './components/Header';
import Navbar from './components/Nav';
import Zanas from './components/Zanas';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';
import Systems from './components/Systems';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Header /><Home /><Footer/></>}/>
          <Route path='/api/sportska-oprema' element={<><Header /><Products /><Footer/></>}/>
          <Route path= '/api/sportski-objekti' element={<><Header /><Objects /><Footer/></>}/>
          <Route path= '/api/zanas' element={<><Header /><Zanas /><Footer/></>}/>
          <Route path= '/api/kontakt' element={<><Header /><Kontakt /><Footer/></>}/>
          <Route path= '/api/sistemi' element={<><Header /><Systems/><Footer/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
