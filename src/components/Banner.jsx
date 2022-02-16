import React from "react";
import "../style/_banner.scss";
import { useLocation } from "react-router";

class Banner extends React.Component {
  render() {
    let adjustBanHeight = 900;
    if (window.innerWidth <= 400) {
      adjustBanHeight = 450;
    } else {
      adjustBanHeight = "auto"
    }

    let location;
    let banSlogan;
    if (this.props.location === "about") {
      location = this.props.source;
    } else {
      location = this.props.homeBan;
      banSlogan = this.props.slogan;
    }
    return (
      <div className="banner" style={{ height: adjustBanHeight + "px" }}>
        <h2>{banSlogan}</h2>
        <span className="opacityBan"></span>
        <img src={location} alt="banniere" />
      </div>
    );
  }
}

export default Banner;
