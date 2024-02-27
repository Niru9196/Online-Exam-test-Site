import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./FirstPage.css"; // Import CSS file for animations

const FirstPage = () => {
  return (
    <div className="first-page-container">
      <div
        className="background-image"
        style={{
          backgroundImage: 'url("exam.jpg")',
        }}
      ></div>
      <NavLink to="/second">
        <button className="start-button">Start</button>
        <div className="line"></div>
      </NavLink>
    </div>
  );
};

export default FirstPage;
