import React from 'react';
import '../style/_gallery.scss';
import Thumb from './Thumb';
import Banner from './Banner';
import homeBanner from '../images/banBack.png';

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <Banner homeBan={homeBanner} slogan="Chez vous, partout et ailleurs" />
        <div className="gallery">
          <Thumb />
        </div>
      </div>
    );
  }
}

export default Gallery;
