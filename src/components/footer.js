
import React from 'react'
import FooterImg from '../images/footer-logo.png'
import "../style/_footer.scss"


class Footer extends React.Component {
    render () {
        return <footer className="main-footer">
                <img src={FooterImg} alt="Logo Kasa" />
                <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
            </footer>  
    }
}

export default Footer;