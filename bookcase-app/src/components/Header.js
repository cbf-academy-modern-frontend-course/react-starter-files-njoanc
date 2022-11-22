import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";
const Header = (props) => {
  return (
    <div className="header">
      <h1>My e-Book Library</h1>
      <div className="breadcrumb">
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        {` | `}
        <div className="link">
          <Link to="/about">About Us</Link>
        </div>
        {` | `}
        <div className="link">
          <Link to="/bookcase" className="bookLink">
            Bookcase({props.bookLength})
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
