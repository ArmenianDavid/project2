import React from "react";
import MyLogo from "../img/MyLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    {" "}
                    <img src={MyLogo} alt="logo" />{" "}
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                {" "}
                                Home{" "}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-honey" className="nav-link">
                                {" "}
                                About Honey{" "}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bees" className="nav-link">
                                {" "}
                                Bees{" "}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/recipes" className="nav-link">
                                {" "}
                                Recipes{" "}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
