import React from "react";
import "../style/_thumb.scss";
import Data from "./Data";
import { Link } from "react-router-dom";
import { uuid as uuidv4 } from "uuidv4";

class Thumb extends React.Component {
  render() {
    return Data.map((item) => {
      return (
        <Link to={`./logement/${item.id}`} key={item.id}>
          <div className="thumb">
            <p className="loc-title">{item.title}</p>
            <img className="location-image" src={item.cover} alt="" />
          </div>
        </Link>
      );
    });
  }
}

export default Thumb;
