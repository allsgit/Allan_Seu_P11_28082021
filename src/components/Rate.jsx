import React from "react";
import "../style/_ficheLogement.scss";
import FullRateStar from "../images/rate_star_full.png";
import EmptyRateStar from "../images/rate_star_empty.png";
import { v4 as uuidv4 } from 'uuid';

class Rate extends React.Component {
  render() {
    const starArray = [1, 2, 3, 4, 5];
    return (
      <>
        {starArray.map((element) =>
          element <= this.props.LogementRating ? (
            <img src={FullRateStar} key={uuidv4()} alt=""></img>
          ) : (
            <img src={EmptyRateStar} key={uuidv4()} alt=""></img>
          )
        )}
      </>
    );
  }
}

export default Rate;
