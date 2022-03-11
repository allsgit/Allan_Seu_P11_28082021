import React from 'react';
import '../style/_Loc_sheet_menu.scss';
import arrow from '../images/arrow.png';

class LocSheetMenu extends React.Component {
  state = {
    classStyle: 'sheet-menu-explain',
    pClassStyle: 'description-text',
    wrapLoc: "menu-sheet-wrap",
    wrapAbout:"menu-sheet-wrap-about",
  };

  render() {
    const toogleMenu = (e) => {
      if (e.target.className === 'arrow') {
        e.target.classList = 'close-arrow';
        this.setState({
          classStyle: 'sheet-menu-explain-closed',
          pClassStyle: 'description-text-opened',
        });
      } else {
        e.target.classList = 'arrow';
        this.setState({
          classStyle: 'sheet-menu-explain',
          pClassStyle: 'description-text',
        });
      }
    };

    return (
      
      <div className={(window.location.pathname !== "/about") ? this.state.wrapLoc : this.state.wrapAbout}>
        <div className="sheet-menu-composant">
          <p>{this.props.title}</p>
          <img
            className="arrow"
            alt=""
            src={arrow}
            onClick={(e) => toogleMenu(e)}
          ></img>
        </div>
        
        <div className={this.state.classStyle}>
          {this.props.Descriptions ? (
            <p className={this.state.pClassStyle}>{this.props.Descriptions}</p>
          ) : (
            <ul className={this.state.pClassStyle}> {this.props.foo}</ul>
          )}
        </div>
      </div>
    );
  }
}

export default LocSheetMenu;
