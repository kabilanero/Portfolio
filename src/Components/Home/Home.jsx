import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import kabimage from '../../../public/WhatsApp Image 2024-09-20 at 12.12.36 PM-removebg-preview-Photoroom.jpg'

import './Home.css';

function Home() {
       
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};
  return (
    <div className='home'>
      <div className="topnav">
        <div className="nav-left">JK</div>
        <div className="hamburger" onClick={toggleMenu}>
    &#9776; {/* Hamburger Icon */}
  </div>
  <div className={`nav-right ${menuOpen ? 'show' : 'hide'}`}>
          <a className="menu-items" href="#Home"><span>Home</span></a>
          <a className="menu-items" href="#About"><span>About</span></a>
          <a className="menu-items" href="#Achievements"><span>Achievements</span></a>
          <a className="menu-items" href="#Location"><span>Location</span></a>
          <a className="menu-items" href="#Projects"><span>Projects</span></a>
        </div>
      </div>
     <div className="homecontent">
      <h2>Welcome To<span className='toggletouch'> Kabil's Portfolio</span></h2>
         
     <div className="Toggledetails">
           <h1>Excellence your work with autograph </h1>
           <marquee behavior="" direction="left" scrollamount="15">  Join With me For Exciting Learning in <span className='details-span'>web development</span>Let's learn something together </marquee>
           <button className='Hireme-btn'>Hire me</button>
           <div className="point1"></div>
           <div className="point2"></div>
           <div className="point3"></div>
     </div>
     <div className="img-div">
        <img src={kabimage} alt="My-image" />
     </div>
     </div>
    </div>
  );
}

export default Home;
