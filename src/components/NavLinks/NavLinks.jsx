import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks() {
  return (
    <ul className="nav_links">
      <NavLink to="/">
        <li>MOVIES</li>
      </NavLink>
      <NavLink to="/about">
        <li>ABOUT</li>
      </NavLink>
      <NavLink to="/contact">
        <li>CONTACT</li>
      </NavLink>
    </ul>
  );
}

export default NavLinks;
