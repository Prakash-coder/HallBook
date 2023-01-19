import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./Navbar.css"

import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import { RiBookletLine} from "react-icons/ri"

export default function Navbar(){

    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <>
        <IconContext.Provider value={{color:"#000"}}>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <RiBookletLine className="navbar-icon" />
                    Hall Book
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click? "navbar-menu active": "navbar-menu"}>
                    <li className="navbar-item">
                        <NavLink to="/" className={({isActive}) => "navbar-links" + (isActive? " active": "")}  onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/about" className={({isActive}) => "navbar-links" + (isActive? " active": "")}  onClick={closeMobileMenu}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </IconContext.Provider>
        </>
    )
}