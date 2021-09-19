import React from "react";
import "../style/_ficheLogement.scss";
import { Fragment } from "react";

class Item_Name_Town extends React.Component {
  render() {
    return (
      <Fragment>
        <h1 className="item-name">COZY LOFT ON THE CANAL</h1>
        <h2 className="item-town">Lyon, Rhône</h2>
      </Fragment>
    );
  }
}

export default Item_Name_Town;
