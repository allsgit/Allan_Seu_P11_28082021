import React from "react";
import "../style/_ficheLogement.scss";

class VendorInfo extends React.Component {
  render() {
    return (
      <>
        <div className="vendorBlock">
          <h3 className="vendor-name">{this.props.VendorName.name}</h3>
          <div className="vendor-profil-img">
            <img src={this.props.UserPicture.picture} alt=""></img>
          </div>
        </div>
      </>
    );
  }
}

export default VendorInfo;
