import React from "react";
import "../style/_menu-composant.scss"



class Tag extends React.Component {
  render() {
    return <div className="tag-line">
    <div className="tag">cool</div>
    <div className="tag">pas cool</div>
    <div className="tag">cool</div>
  </div>
  }
}


export default Tag;