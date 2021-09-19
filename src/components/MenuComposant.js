import React from "react";
import "../style/_menu-composant.scss"
import arrow from "../images/arrow.png"


class MenuComposant extends React.Component {
  render() {
    return <div className="menu-composant-wrap">
    <div className="menu-composant">
        <p>propriété de l'objet</p>
        <img src={arrow}></img>
        </div>
         <div className="sub-menu-composant"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus porro ipsum reiciendis, tempore autem quis quisquam facere sit quidem excepturi provident soluta minima officiis eum eveniet expedita quae animi? At?</p></div>
         </div>
  }
}


export default MenuComposant;