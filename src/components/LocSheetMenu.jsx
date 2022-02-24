import React from 'react';
import '../style/_Loc_sheet_menu.scss';
import arrow from '../images/arrow.png';

class LocSheetMenu extends React.Component {
  state = {
    classStyle: 'sheet-menu-explain',
    pClassStyle: 'description-text',
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
      <div className="menu-sheet-wrap">
        <div className="sheet-menu-composant">
          <p>{this.props.title}</p>
          <img
            className="arrow"
            alt=''
            src={arrow}
            onClick={(e) => toogleMenu(e)}
          ></img>
        </div>
        <div className={this.state.classStyle}>
          <p className={this.state.pClassStyle}>{this.props.Descriptions}</p>
        </div>
      </div>
    );
  }
}

export default LocSheetMenu;
