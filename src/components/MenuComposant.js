import React from 'react';
import '../style/_menu-composant.scss';
import arrow from '../images/arrow.png';

class MenuComposant extends React.Component {
  render() {
    return (
      <div className="menu-composant-wrap">
        <div className="menu-composant">
          <p>propriété de l'objet</p>
          <img src={arrow}></img>
        </div>
        <div className="sub-menu-composant">
          {this.props.equipments.map((equip) => (
            <p>
              {equip}
              <br></br>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default MenuComposant;
