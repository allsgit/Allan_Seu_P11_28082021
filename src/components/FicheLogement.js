import React, { Fragment } from "react";
import "../style/_ficheLogement.scss";
import MenuComposant from "./MenuComposant";
import Tag from "./Tag";
import Vendor_info from "./Vendor_info";
import Item_Name_Town from "./Item_name_town";
import Data from "./Data";

import Banner2 from "./Banner2";


class FicheLogement extends React.Component {
  render() {
    return Data.filter(
      (element) => element.id == window.location.pathname.replace("/logement/", "")
    ).map((element) => {
      return (
        
        <div key={element.id}>
          {console.log(window.location.pathname)}
          <Banner2 origin={element.cover}/>
          <div className="logement-img"></div>
          <section className="item-information">
            <div className="information-div">
              <Item_Name_Town titre={element.title} place={element.location} />
              <div className="tag-line">
                <Tag Tags={element.tags} />
              </div>
            </div>
            <div className="vendor-information">
              <Vendor_info
                VendorName={element.host}
                UserPicture={element.host}
              />
              <div className="rate-line"></div>
            </div>
          </section>

          <section className="item-description">
            <MenuComposant
              Descriptions={element.description}
              descript="description"
            />
            <MenuComposant
              Equipements={element.equipments}
              equipement="equipement"
            />
          </section>
        </div>
      );
    });
  }
}

export default FicheLogement;
