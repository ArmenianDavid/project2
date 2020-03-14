import React from "react";
import "./Recipe.css";

const Recipe = ({
    id,
    name,
    img,
    output,
    ingredients = [],
    directions = [],
    information,
    tip
}) => {
    return (
        <div className="recipe-container ">
            <div
                className="recipe pointer"
                onClick={() => console.log("i am clicked")}
            >
                <div>
                    <img src={img} alt="recipe-img" className="recipe-img" />
                </div>
                <div className="recipe-name-container">
                    <h2 className="recipe-name">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
