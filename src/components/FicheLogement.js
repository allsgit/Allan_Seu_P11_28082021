import React, { Fragment } from 'react';
import '../style/_ficheLogement.scss';
import MenuComposant from './MenuComposant';
import Rate from './Rate';
import Tag from './Tag';
import Vendor_info from './vendor_info';
import Item_Name_Town from './Item_name_town';

class FicheLogement extends React.Component {
  render() {
    // On a besoin de la props LOCATION, celle ci est creer automatiquement avec la route
    const { match, location } = this.props;
    return (
      <div>
        <span>{location.myAptProps.title}</span>

        <div className="logement-img"></div>
        <section className="item-information">
          <div className="information-div">
            {/* J'ai modifie les composants pour prendre les parametres necessaires */}
            <Item_Name_Town
              title={location.myAptProps.title}
              location={location.myAptProps.location}
            />
            <Tag tags={location.myAptProps.tags} />
          </div>
          <div className="vendor-information">
            <Vendor_info host={location.myAptProps.host} />
            <Rate rating={location.myAptProps.rating} />
          </div>
        </section>

        <section className="item-description">
          <MenuComposant equipments={location.myAptProps.equipments} />
          {/* <MenuComposant /> */}
        </section>
      </div>
    );
  }
}

export default FicheLogement;
