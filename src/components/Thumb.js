import React from 'react';
import '../style/_thumb.scss';
import Data from './data';
import { Link } from 'react-router-dom';

class Thumb extends React.Component {
  render() {
    return Data.map((item) => {
      return (
        <Link
          to={{
            // On ajoute l'ID de l'apaprtement dans le lien
            pathname: `/logement/${item.id}`,
            // ON ajoute l'apartement a passer comme parametre
            // Le nom myAptProps est a toi de choirir, ca peut etre ce que tu evux
            myAptProps: item,
          }}
        >
          <div className="thumb">
            <p className="loc-title">{item.title}</p>
            <img class="location-image" src={item.cover} alt="" />
          </div>
        </Link>
      );
    });
  }
}

export default Thumb;
