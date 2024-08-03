import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./bnha.css";

import Main from "./Main";

export default function BNHA() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
    </Routes>
  )
}
