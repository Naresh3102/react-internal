import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              Login Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
