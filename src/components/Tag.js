import React from 'react';
import '../style/_menu-composant.scss';

class Tag extends React.Component {
  render() {
    return (
      <div className="tag-line">
        {/* On utilise les parametres, plutot que des valeurs en dur */}
        {this.props.tags.map((tag) => (
          <div className="tag">{tag}</div>
        ))}
      </div>
    );
  }
}

export default Tag;
