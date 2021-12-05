import React from "react";
import "../style/_ficheLogement.scss";
import { Fragment } from "react";

class Item_Name_Town extends React.Component {
  render() {
    return (
      <>
        <h1 className="item-name">{this.props.titre}</h1>
        <h2 className="item-town">{this.props.place}</h2>
      </>
    );
  }
}

export default Item_Name_Town;
