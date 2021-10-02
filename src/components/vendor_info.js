import React from 'react';
import '../style/_ficheLogement.scss';
import { Fragment } from 'react';

class Vendor_Info extends React.Component {
  render() {
    const { name, picture } = this.props.host;
    return (
      <Fragment>
        <h3 className="vendor-name">{name}</h3>
        <div className="vendor-profil-img">
          <img class="location-image" src={picture} alt="" />
        </div>
      </Fragment>
    );
  }
}

export default Vendor_Info;
