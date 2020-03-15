import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="background">
            <div className="error-container">
                <div className="error">
                    <h1>404</h1>
                    <div className="line"></div>
                    <p>page not found</p>
                    <Link to="/" className="myButton">
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
