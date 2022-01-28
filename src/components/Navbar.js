import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({setIsLogin}) => {
  const logOut = () => {
    setIsLogin(false)
  }

  return (
    <div className="navbar">
      <div className="container">
        <NavLink className="navbar-logo" to="/">
          NoteApp
        </NavLink>
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink onClick={logOut} className="navbar-link" to="/">
              Log out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
