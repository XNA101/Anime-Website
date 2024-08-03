import React from 'react';
import './Home.css';
import bnhaimg from "../../animanga/BNHA/bnha.webp";
import jjkimg from "../../animanga/JJK/jjk.jpg";
// import knyimg from "../../animanga/KNY/kny.jpg";

function Home() {
  return (
    <div className="Home">
      <div className="header">
        <h1>Anime Website</h1>
      </div>
      <div className="animanga">
        <div className="show">
          <a href="/bnha">
            <img src={bnhaimg} alt="bnha" />
            <h3>Boku no Hero Academia</h3>
          </a>
        </div>
        <div className="show">
          <a href="/jjk">
            <img src={jjkimg} alt="jjk" />
            <h3>Jujutsu Kaisen</h3>
          </a>
        </div>
        {/* <div className="show">
          <a href="/kny">
            <img src={knyimg} alt="kny" />
            <h3>Kimetsu no Yaiba</h3>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
