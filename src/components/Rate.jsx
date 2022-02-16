import React from "react";
import "../style/_ficheLogement.scss";
import FullRateStar from "../images/rate_star_full.png";
import EmptyRateStar from "../images/rate_star_empty.png";
import { uuid } from "uuidv4";

class Rate extends React.Component {
  render() {
    const starArray = [1, 2, 3, 4, 5];
    return (
      <>
        {starArray.map((element) =>
          element <= this.props.LogementRating ? (
            <img src={FullRateStar} key={uuid()}></img>
          ) : (
            <img src={EmptyRateStar} key={uuid()}></img>
          )
        )}
      </>
    );
  }
}

export default Rate;
