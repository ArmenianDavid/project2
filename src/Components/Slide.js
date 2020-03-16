import React from "react";
import honey_1 from "../img/honey_1.jpg";
import honey_2 from "../img/honey_2.jpg";
import honey_3 from "../img/honey_3.jpg";
import honey_4 from "../img/honey_4.jpg";
import honey_5 from "../img/honey_5.jpg";

const Slide = () => {
    return (
        <div className="carousel slide" data-ride="carousel" id="slide">
            <ul className="carousel-indicators">
                <li
                    data-target="#slide"
                    data-slide-to="0"
                    className="active"
                ></li>
                <li data-target="#slide" data-slide-to="1"></li>
                <li data-target="#slide" data-slide-to="2"></li>
                <li data-target="#slide" data-slide-to="3"></li>
                <li data-target="#slide" data-slide-to="4"></li>
            </ul>
            <div className="carousel-caption">
                <h1 className="display-2">Honey</h1>
                <h3> Natures finest work</h3>
                <button type="button" className="btn btn-outline-light btn-lg ">
                    {" "}
                    Go to{" "}
                </button>
                <button type="button" className="btn btn-warning btn-lg">
                    {" "}
                    Demo{" "}
                </button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={honey_1} alt="honey-img" />
                </div>
                <div className="carousel-item">
                    <img src={honey_2} alt="honey-img" />
                </div>
                <div className="carousel-item">
                    <img src={honey_3} alt="honey-img" />
                </div>
                <div className="carousel-item">
                    <img src={honey_4} alt="honey-img" />
                </div>
                <div className="carousel-item">
                    <img src={honey_5} alt="honey-img" />
                </div>
            </div>
        </div>
    );
};

export default Slide;
