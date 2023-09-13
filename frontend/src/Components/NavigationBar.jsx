import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";


const NavigationBar = ({ active, handleClick }) => {
  return (
    <nav>
      <div className={`navigation ${active}`} onClick={handleClick}>
        <span className={`toggle-menu ${active}`} onClick={handleClick}></span>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/determine">My carbon footprint</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </div>
    </nav>
  )
}

export default NavigationBar;