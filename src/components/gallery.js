import React from 'react'
import '../style/_gallery.scss'
import Thumb from './Thumb'


class Gallery extends React.Component {
    render () {
        return <div className="gallery">
        <Thumb />       
    </div>
    }
}

export default Gallery;