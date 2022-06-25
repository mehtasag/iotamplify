import React from "react";
import { NavLink } from "react-router-dom";
const NavbarLinks = ({ value, to }) => {
  return (
    <div>
      <NavLink
        to={to}
        style={({ isActive }) => {
          return {
            display: "block",

            padding: "4px",
            backgroundColor: isActive ? `#f87171` : "",

            width: "fit-content",
            textAlign: "center",
          };
        }}
      >
        {value}
      </NavLink>
    </div>
  );
};

export default NavbarLinks;
