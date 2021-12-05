import React from "react";
import "../style/_menu-composant.scss";
import arrow from "../images/arrow.png";
import { useState } from "react";

class MenuComposant extends React.Component {
 
  render() {

    return (
     
      <div className="menu-composant-wrap">
        <div className="menu-composant">
          <p>
            {this.props.descript}
            {this.props.equipement}
          </p>
          <img src={arrow}></img>
        </div>
        <div className="sub-menu-composant">
          <p>{this.props.Descriptions}</p>
        </div>
      </div>
    );
  }
}

export default MenuComposant;
