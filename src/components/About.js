import React from "react";
import "../style/_about.scss";
import arrow from "../images/arrow.png";
import Banner from "./Banner";
import Banner3 from "../images/Background-about.png";
import MenuComposant from "./MenuComposant";

class About extends React.Component {
  render() {
    return (
      <div className="about-section">
        <Banner source={Banner3} location="about" />
        <div className="menu-composant">
          Fiabilité<img src={arrow}></img>
        </div>
        <div className="explain-1">
          <p></p>
        </div>
        <div className="menu-composant">
          Respect<img src={arrow}></img>
        </div>
        <div className="explain-2">
          <p></p>
        </div>
        <div className="menu-composant">
          Service<img src={arrow}></img>
        </div>
        <div className="explain-3">
          <p></p>
        </div>
        <div className="menu-composant">
        </div>
        <div className="explain-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            porro ipsum reiciendis, tempore autem quis quisquam facere sit
            quidem excepturi provident soluta minima officiis eum eveniet
            expedita quae animi? At?
          </p>
        </div>
      </div>
    );
  }
}

export default About;
