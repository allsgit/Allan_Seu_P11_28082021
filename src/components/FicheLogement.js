import React, { Fragment } from "react";
import "../style/_ficheLogement.scss";
import MenuComposant from "./MenuComposant";
import Rate from "./Rate";
import Tag from "./Tag";
import Vendor_info from "./vendor_info";
import Item_Name_Town from "./Item_name_town";

class FicheLogement extends React.Component {
  render() {
    return (
      <div>
        <div className="logement-img"></div>
        <section className="item-information">
          <div className="information-div">
            <Item_Name_Town />
            <Tag />
          </div>
          <div className="vendor-information">
            <Vendor_info />
            <Rate />
          </div>
        </section>

        <section className="item-description">
          <MenuComposant />
          <MenuComposant />
        </section>
      </div>
    );
  }
}

export default FicheLogement;
