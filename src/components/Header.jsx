import React from 'react' // import ALWAYS react //
import {Link} from 'react-router-dom' //Declaration//
import logo from '../utils/images/logo.png'
import ig from '../utils/images/ig.PNG'
import yb from '../utils/images/yb.PNG'
import men from '../utils/images/men.PNG'

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="logo"> <img src={logo} alt="Logo"/> </div>
                <div className="socialmedia">  <img src={ig} alt="Instagram"/>  <img src={yb} alt="YouTube"/> </div>
            </header>
            <div className="headerMenu">
                <input type="checkbox" id="btn-menu" />
                <label htmlFor="btn-menu"> <img src={men} alt="Menú"/> </label>
                <nav className="menu">
                    <ul>
                        <li> INICIO</li>
                        <li> PLANTAS</li>
                        <Link to='/'>
                           <li> ÁRBOLES</li>
                        </Link>                        
                        <li> ASESORÍAS</li>
                        <Link to='/AboutUs'>
                           <li> ¿QUIÉNES SOMOS?</li>
                        </Link>
                    </ul>
                </nav>
            </div>
      </div>
    )
}
export default Header