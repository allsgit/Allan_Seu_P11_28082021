import React from 'react'
import "../style/_about.scss"
import arrow from "../images/arrow.png"


class About extends React.Component {
    render () {
        return <div className="about-section">
            <div className="menu-composant">Fiabilité<img src={arrow}></img></div>
            <div className="explain-1"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus porro ipsum reiciendis, tempore autem quis quisquam facere sit quidem excepturi provident soluta minima officiis eum eveniet expedita quae animi? At?</p></div>
            <div className="menu-composant">Respect<img src={arrow}></img></div>
            <div className="explain-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus porro ipsum reiciendis, tempore autem quis quisquam facere sit quidem excepturi provident soluta minima officiis eum eveniet expedita quae animi? At?</p></div>
            <div className="menu-composant">Service<img src={arrow}></img></div>
            <div className="explain-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus porro ipsum reiciendis, tempore autem quis quisquam facere sit quidem excepturi provident soluta minima officiis eum eveniet expedita quae animi? At?</p></div>
            <div className="menu-composant">Responsabilité<img src={arrow}></img></div>
            <div className="explain-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus porro ipsum reiciendis, tempore autem quis quisquam facere sit quidem excepturi provident soluta minima officiis eum eveniet expedita quae animi? At?</p></div>

    </div>
    }
}

export default About;