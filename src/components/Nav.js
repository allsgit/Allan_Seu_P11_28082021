import React from "react";
import { Link } from "react-router-dom";
import "../style/_nav.scss";


class NavBar extends React.Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <Link to="./">
            <li>Accueil</li>
          </Link>
          <Link to="./apropos">
            <li>A propos</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
