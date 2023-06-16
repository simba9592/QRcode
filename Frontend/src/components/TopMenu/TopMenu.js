import React from "react";
import { Link } from "react-router-dom";
import "./TopMenu.css";

const TopMenu = () => {
  return (
    <nav className="nav" id="menu">
      <div className="wrap">
        <div className="brand">
          <img src="/logo.png" alt="logo" />
          <span>sparkcounsel</span>
        </div>
        <div className="menuContainer">          
          <ul className="top-menu" id="top-menu">            
            <li>
              <Link to="/talktospark">Talk To Spark</Link >
            </li>
            <li>
              <Link  to="/laywers">Lawyers</Link >
            </li>
            <li>
              <Link  to="/resources">Resources</Link >
            </li>
            <li>
              <Link  to="/contribute">Contribute</Link >
            </li>
            <li>
              <Link  to="/about">About</Link >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;