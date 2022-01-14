import React from 'react';

import { BrowserRouter , Route, Routes } from "react-router-dom";

import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import Watching from './components/Watching';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/watching/:id" element={<Watching />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
