import React from "react";
import "../style/_ficheLogement.scss";
import { Fragment } from "react";

class Vendor_Info extends React.Component {
  render() {
    return (
      <Fragment>
        <h3 className="vendor-name">FRANCK DUPONT</h3>
        <div className="vendor-profil-img"></div>
      </Fragment>
    );
  }
}

export default Vendor_Info;
