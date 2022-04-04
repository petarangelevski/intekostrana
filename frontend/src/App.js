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
import Patiki from './components/Patiki';
import AkrilniPodlogi from './components/AkrilniPodlogi';
import Baloni from './components/Baloni'
import TeniskiTereni from './components/TeniskiTereni';
import Tartan from './components/Tartan';
import DetskiIgralista from './components/DetskiIgralista';
import Samoliv from './components/Samoliv'
import TrimPateki from './components/TrimPateki'
import Navigation from './components/NavBar/Navigation';

function App() {
  return (
    <Router>
      <div className='app'>
        {/* <Navbar /> */}
        <Navigation />
        <Routes>
          <Route path='/' element={<><Header /><Home /><Footer/></>}/>
          <Route path='/api/sportska-oprema' element={<><Header /><Products /><Footer/></>}/>
          <Route path= '/api/sportski-objekti' element={<><Header /><Objects /><Footer/></>}/>
          <Route path= '/api/zanas' element={<><Header /><Zanas /><Footer/></>}/>
          <Route path= '/api/kontakt' element={<><Header /><Kontakt /><Footer/></>}/>
          <Route path= '/api/sistemi' element={<><Header /><Systems/><Footer/></>} />
          <Route path= '/api/sportska-oprema/patiki' element={<><Header /><Patiki/><Footer/></>} />
          <Route path= '/api/sportski-objekti/akrilni-podlogi' element={<><Header /><AkrilniPodlogi/><Footer/></>} />
          <Route path= '/api/sportski-objekti/baloni' element={<><Header /><Baloni/><Footer/></>} />
          <Route path= '/api/sportski-objekti/teniski-tereni' element={<><Header /><TeniskiTereni/><Footer/></>} />
          <Route path= '/api/sportski-objekti/tartan' element={<><Header /><Tartan/><Footer/></>} />
          <Route path= '/api/sportski-objekti/detski-igralista' element={<><Header /><DetskiIgralista/><Footer/></>} />
          <Route path= '/api/sportski-objekti/samoliv' element={<><Header /><Samoliv/><Footer/></>} />
          <Route path= '/api/sportski-objekti/trim-pateki' element={<><Header /><TrimPateki/><Footer/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
