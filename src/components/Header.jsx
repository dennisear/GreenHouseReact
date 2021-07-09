import React from 'react' // import ALWAYS react //
import {Link} from 'react-router-dom' //Declaration//
import logo from '../utils/images/logo.png'
import ig from '../utils/images/ig.PNG'
import yb from '../utils/images/yb.PNG'
import men from '../utils/images/men.PNG'
import Barra from '../utils/images/bannerAS.png'

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="logo"> <img src={logo} alt="Logo"/> </div>
                <div className="socialmedia">  <a href='https://www.instagram.com/greenhousevv/'><img src={ig} alt="Instagram"/></a>  <a href="https://www.youtube.com/channel/UCgTnRFSlSKSRG92X7ZNoPew"><img src={yb} alt="YouTube"/></a> </div>
            </header>
            <div className="headerMenu">
                <input type="checkbox" id="btn-menu" />
                <label htmlFor="btn-menu"> <img src={men} alt="Menú"/> </label>
                <nav className="menu">
                    <ul>
                        <li> INICIO</li>
                        <li> PLANTAS</li>
                        <li> ÁRBOLES</li>
                        <Link to='/'>
                           <li> ASESORÍAS</li>
                        </Link>                        
                        <Link to='/AboutUs'>
                           <li> ¿QUIÉNES SOMOS?</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className="banner">
            <img id="Barra" src={Barra} alt="Cargando..."/></div>
      </div>
    )
}
export default Header