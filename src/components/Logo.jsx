import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../images/logoImg.png";
import "../style/_logo.scss";

class Logo extends React.Component {
  render() {
    return (
      <Link to="./">
        <div>
          <img className="logo-img" src={BrandLogo} alt="" />
        </div>
      </Link>
    );
  }
}

export default Logo;
