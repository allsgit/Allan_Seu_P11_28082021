import React, { Fragment } from "react";
import "../style/_ficheLogement.scss";
import LocSheetMenu from "./LocSheetMenu";
import Tag from "./Tag";
import Vendor_info from "./Vendor_info";
import Item_Name_Town from "./Item_name_town";
import Data from "./Data";
import Banner2 from "./Banner2";

class FicheLogement extends React.Component {
  state = {
    imagePosition: 0,
  };

  render() {
    return Data.filter(
      (element) =>
        element.id == window.location.pathname.replace("/logement/", "")
    ).map((element) => {
      //***
      /// BANNER IMAGE SWITCH FUNCTION WITH ARROW //
      //***
      const imageSwitch = (e) => {
        // RIGHT ARROW //
        if (e.target.className == "white-arrow-right") {
          if (this.state.imagePosition < element.pictures.length - 1) {
            this.setState({
              imagePosition: this.state.imagePosition + 1,
            });
          }
          if (this.state.imagePosition === element.pictures.length - 1) {
            this.setState({
              imagePosition: 0,
            });
          }
        }
        // END RIGHT ARROW //

        // LEFT ARROW //
        if (e.target.className == "white-arrow-left") {
          if (this.state.imagePosition == 0) {
            this.setState({
              imagePosition:
                this.state.imagePosition + element.pictures.length - 1,
            });
          } else {
            this.setState({
              imagePosition: this.state.imagePosition - 1,
            });
          }
        }
        // END RIGHT ARROW //
      };

      return (
        <div key={element.id}>
          <Banner2
            origin={element.pictures[this.state.imagePosition]}
            function={(e) => imageSwitch(e)}
            positionShow={this.state.imagePosition}
            totalImage={element.pictures.length}
          />
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
            <LocSheetMenu
              Descriptions={element.description}
              title="description"
            />
            <LocSheetMenu
              title="Equipements"
              descript={element.pictures}
            />
          </section>
        </div>
      );
    });
  }
}

export default FicheLogement;
