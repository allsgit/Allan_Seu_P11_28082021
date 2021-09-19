import React from 'react'
import "../style/_banner.scss"
import Banback from "../images/banBack.png"

class Banner extends React.Component {
    render () {
        return <div className="banner">
        <h2>Chez vous, partout et ailleurs</h2>
        <span className="opacityBan"></span>
        <img src={Banback} alt="" />
       
    </div>
    }
}

export default Banner;