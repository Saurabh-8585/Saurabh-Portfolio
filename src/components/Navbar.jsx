import  { useState } from "react";
import "../styles/nav.css"
import { NavLink, Link } from "react-router-dom";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <Link  to="/" className="nav-logo">
                        Sau<span className='r'>र</span>bh   
                    </Link>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/"
                                className="nav-links"
                                end
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                
                                to="/projects"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/about"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                
                                to="/contact"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
