import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./NavBar.css";

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener("resize", showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        Rustam
                        <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon">
                        <i
                            className={click ? "fas fa-times" : "fas fa-bars"}
                            onClick={() => setClick(!click)}
                        ></i>
                    </div>
                    <ul className={click ? " nav-menu active" : "nav-menu"}>
                        <li className="navbar-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link
                                to="/Services"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/Products"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/SignUp"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                SighUp
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btnOutline">sighUp</Button>}
                </div>
            </nav>
        </>
    );
};

export default NavBar;
