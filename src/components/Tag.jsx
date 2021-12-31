import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "../style/_menu-composant.scss";
import { v4 as uuidv4 } from "uuid";

class Tag extends React.Component {
  render() {
    return this.props.Tags.map((element) => {
      return (
        <div key={uuidv4()} className="tag">
          {element}
        </div>
      );
    });
  }
}

export default Tag;
