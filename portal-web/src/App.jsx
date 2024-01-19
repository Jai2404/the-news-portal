import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Politics from './routes/Politics';
import Entertainment from './routes/Entertainment';
import Buisness from './routes/Buisness'; // Corrected the typo in the import
import Sports from './routes/Sports';
import TopHeadings from './routes/TopHeadings';

function App() {


  return (
    <div className='App'>
      <Navbar />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-heading" element={<TopHeadings />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/buisness" element={<Buisness />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </div>
  );
}

export default App;
