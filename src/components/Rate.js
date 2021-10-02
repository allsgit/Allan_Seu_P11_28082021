import React from 'react';
import '../style/_ficheLogement.scss';
import Data from './data';
import FullRateStar from '../images/rate_star_full.png';
import EmptyRateStar from '../images/rate_star_empty.png';

class Rate extends React.Component {
  render() {
    return <div>Rating: {this.props.rating}</div>;
  }
}

export default Rate;
