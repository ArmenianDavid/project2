import React from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";

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
            <Link to={`/recipes/${id}`}>
                <div className="recipe pointer">
                    <div>
                        <img
                            src={img}
                            alt="recipe-img"
                            className="recipe-img"
                        />
                    </div>
                    <div className="recipe-name-container">
                        <h2 className="recipe-name">{name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Recipe;
