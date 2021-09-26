import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.cakeresume.com/dennis-wei-5021c1"
          >
            About Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
