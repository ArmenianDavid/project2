import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/MyLogo.png";

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 bg-color">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-sd-12 col-md-6 mt-md-0 mt-3">
                        <img src={logo} alt="logo" className="footer-logo" />
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-3"></hr>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Pages</h5>

                        <ul className="list-unstyled">
                            <li>
                                <Link to="/home" className="nav-link active">
                                    {" "}
                                    Home{" "}
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-honey" className="nav-link">
                                    {" "}
                                    About Honey{" "}
                                </Link>
                            </li>
                            <li>
                                <Link to="/bees" className="nav-link">
                                    {" "}
                                    Bees{" "}
                                </Link>
                            </li>
                            <li>
                                <Link to="/recipes" className="nav-link">
                                    {" "}
                                    Recipes{" "}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Contacts</h5>

                        <ul className="list-unstyled">
                            <li>
                                <span>Email</span> :{" "}
                                <span>sahakyandavit92@gmail.com</span>
                            </li>
                            <li>
                                <span>Phone</span> :{" "}
                                <span>+374 98 0000 65</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">
                © 2020 Made by Davit Sahakyan
            </div>
        </footer>
    );
};

export default Footer;
