import React from 'react'
import '../style/_thumb.scss'
import Data from "./data"
import { Link } from "react-router-dom";

class Thumb extends React.Component {
    render() {
      return (Data.map(item => {

            return  <Link to='./logement'>
                <div className="thumb">
                <p className ="loc-title">{item.title}</p>
                <img class="location-image" src={item.cover} alt="" />
                
            </div>    
            </Link>
        }) 
      );
    }
  }

export default Thumb;
    
