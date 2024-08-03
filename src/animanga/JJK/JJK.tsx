import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./jjk.css";

import Main from "./Main";
import Test from './Test';

export default function JJK() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="test" element={<Test />} />
    </Routes>
  )
}
