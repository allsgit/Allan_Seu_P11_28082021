import React from "react";
import "../style/_banner.scss";
import whiteArrow from "../images/white-arrow.png";

class Banner2 extends React.Component {
  render() {
    return (
      <div className="banner2">
        <div className="image-number">
          {this.props.totalImage === 1
            ? ""
            : this.props.positionShow + 1 + "/" + this.props.totalImage}
        </div>
        {this.props.totalImage === 1 ? (
          ""
        ) : (
          <img
            src={whiteArrow}
            alt=""
            className="white-arrow-left"
            onClick={this.props.function}
          />
        )}
        {this.props.totalImage === 1 ? (
          ""
        ) : (
          <img
            src={whiteArrow}
            alt=""
            className="white-arrow-right"
            onClick={this.props.function}
          />
        )}

        <img className="logement-ban" src={this.props.origin} alt="" />
      </div>
    );
  }
}

export default Banner2;
