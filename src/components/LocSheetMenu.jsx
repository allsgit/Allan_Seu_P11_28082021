import React from "react";
import "../style/_Loc_sheet_menu.scss";
import arrow from "../images/arrow.png";

class LocSheetMenu extends React.Component {
  state = {
    classStyle: "sheet-menu-explain",
  };

  render() {
    const toogleMenu = (e) => {
      if (e.target.className == "arrow") {
        e.target.classList = "close-arrow";
        this.setState({
          classStyle: "sheet-menu-explain-closed",
        });
      } else {
        e.target.classList = "arrow";
        this.setState({
          classStyle: "sheet-menu-explain",
        });
      }
    };
    
    return (
      <div className="menu-sheet-wrap">
        <div className="sheet-menu-composant">
          <p>{this.props.title}</p>
          <img
            className="arrow"
            src={arrow}
            onClick={(e) => toogleMenu(e)}
          ></img>
        </div>
        <div className={this.state.classStyle}>
          <p className="description-text">{this.props.Descriptions}</p>
        </div>
        <div className={this.state.classStyle}>
      
       <p className="description-text">{"équipement à mettre"}</p>
  
        
         
        </div>
      </div>
    );
  }
}

export default LocSheetMenu;
