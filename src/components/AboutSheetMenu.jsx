import React from "react";
import "../style/_menu-composant.scss";
import arrow from "../images/arrow.png";

class MenuComposant extends React.Component {
  state = {
    classStyle: "sub-menu-composant-closed",
  };

  render() {
    const toogleMenu = (e) => {
      if (window.location.pathname.match("/about")) {
        if (e.target.className == "arrow") {
          e.target.classList = "close-arrow";
          this.setState({
            classStyle: "sub-menu-composant",
          });
        } else {
          e.target.classList = "arrow";
          this.setState({
            classStyle: "sub-menu-composant-closed",
          });
        }
      }
    };

    return (
      <div className="menu-composant-wrap">
        <div className="menu-composant">
          <p>
            {this.props.descript}
            {this.props.equipement}
          </p>
          <img
            className="arrow"
            src={arrow}
            onClick={(e) => toogleMenu(e)}
          ></img>
        </div>

        <div
          className={
            window.location.pathname.match("/about")
              ? this.state.classStyle
              : "sub-menu-composant"
          }
        >
          <p className="about-description">{this.props.Descriptions}</p>
        </div>
      </div>
    );
  }
}

export default MenuComposant;
