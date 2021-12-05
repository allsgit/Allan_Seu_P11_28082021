import React from "react";
import "../style/_banner.scss";
import Banback2 from "../images/banner2.png";
import Data from "./Data";

class Banner2 extends React.Component {
  render() {
    return (
      <div className="banner2">
        <img src={this.props.origin} alt="" />
      </div>
    );
  }
}

export default Banner2;
