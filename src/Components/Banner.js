import React from "react";
import "./Banner.css";

const Banner = ({ img }) => {
    return (
        <div className="banner">
            <img src={img} alt="banner" className="banner-img" />
        </div>
    );
};

export default Banner;
