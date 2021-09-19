import React from "react";
import "../style/_ficheLogement.scss";
import Data from "./data";
import FullRateStar from "../images/rate_star_full.png";
import EmptyRateStar from "../images/rate_star_empty.png";

class Rate extends React.Component {
  render() {
    return Data.map((item) => {
      return item.rating;
    });
  }
}

export default Rate;
