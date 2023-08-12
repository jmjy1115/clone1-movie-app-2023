import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
      </Routes>
    </HashRouter>
  );
}

export default App;
