import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="title">
      <p onClick={() => navigate("/jjk/test")}>JJK</p>
    </div>
  )
}
