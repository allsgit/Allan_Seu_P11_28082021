import React from 'react';
import '../style/_ficheLogement.scss';
import LocSheetMenu from './LocSheetMenu';
import Tag from './Tag';
import VendorInfo from './VendorInfo';
import ItemNameTown from './ItemNameTown';
import Data from './Data';
import BannerWrapper from './RentProviderBanner';
import Rate from './Rate';
import { useParams, Navigate } from 'react-router-dom';

// HOC FOR PARAMS //
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}
// CHECK VALIDITY OF ID
const checkIdValidity = (id) => {
  const resultat = Data.find((LocItem) => LocItem.id === id);
  if (resultat !== undefined) return true;
  return false;
};

// APPARTMENT COMPONENT //
class FicheLogement extends React.Component {
  // STATE FOR IMG CAROUSEL //
  state = {
    imagePosition: 0,
  };
  render() {
    let { id } = this.props.params;

    const getVendorInfo = (id) => {
      return Data.map((element) => {
        /// BANNER IMAGE SWITCH FUNCTION WITH ARROW //
        const imageSwitch = (e) => {
          // RIGHT ARROW //
          if (e.target.className === 'white-arrow-right') {
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
          // LEFT ARROW //
          if (e.target.className === 'white-arrow-left') {
            if (this.state.imagePosition === 0) {
              this.setState({
                imagePosition: this.state.imagePosition + element.pictures.length - 1,
              });
            } else {
              this.setState({
                imagePosition: this.state.imagePosition - 1,
              });
            }
          }
        };
        /// RETURN APPARTMENT IF ID MATCHED ///
        if (element.id === id) {
          return (
            <div key={element.id}>
              <BannerWrapper
                function={(e) => imageSwitch(e)}
                origin={element.pictures[this.state.imagePosition]}
                positionShow={this.state.imagePosition}
                totalImage={element.pictures.length}
              />
              <div className="logement-img"></div>
              <section className="item-information">
                <div className="information-div">
                  <ItemNameTown titre={element.title} place={element.location} />
                  <div className="tag-line">
                    <Tag Tags={element.tags} />
                  </div>
                </div>
                <div className="vendor-information">
                  <VendorInfo VendorName={element.host} UserPicture={element.host} />
                  <div className="rate-line">
                    <Rate LogementRating={element.rating} />
                  </div>
                </div>
              </section>

              <section className="item-description">
                <LocSheetMenu Descriptions={element.description} title="description" />
                <LocSheetMenu
                  title="Equipements"
                  foo={element.equipments.map((element) => (
                    <li key={id + element}>{element}</li>
                  ))}
                />
              </section>
            </div>
          );
        }
      });
    };

    const characterInfo = getVendorInfo(id);
    const isVendorInAPI = checkIdValidity(id);
    if (isVendorInAPI === false) return <Navigate replace to="" />;
    return characterInfo;
  }
}

export default withParams(FicheLogement);
