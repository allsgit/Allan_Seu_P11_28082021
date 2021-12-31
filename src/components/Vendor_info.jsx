import React from "react";
import "../style/_ficheLogement.scss";
import { Fragment } from "react";

class Vendor_Info extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="vendorBlock">
          <h3 className="vendor-name">{this.props.VendorName.name}</h3>
          <div className="vendor-profil-img">
            <img src={this.props.UserPicture.picture}></img>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Vendor_Info;
