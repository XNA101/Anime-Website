import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import BNHA from '../animanga/BNHA/BNHA';
import JJK from '../animanga/JJK/JJK';
import KNY from '../animanga/KNY/KNY';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/bnha" element={<BNHA />}/>
        <Route path="/jjk/*" element={<JJK />}/>
        <Route path="/kny" element={<KNY />}/>
      </Routes>
    </Router>
  );
}

export default App;
