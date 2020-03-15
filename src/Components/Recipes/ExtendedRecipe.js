import React from "react";

const ExtendedRecipe = ({
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
        <div className="extended-recipe-container">
            <div className="extended-recipe">
                <div className="extended-recipe-heading">
                    <h1 className="header">{name}</h1>
                </div>
                <div className="image-container">
                    <img
                        src={img}
                        alt="recipe-img"
                        className="extended-recipe-img"
                    />
                </div>
                <div>
                    <p>
                        <span className="titles">Yield :</span>{" "}
                        <span className="text">{output}</span>
                    </p>
                    <p>
                        <span className="titles">Ingredients</span>
                    </p>
                    <div>
                        {ingredients.map((item, index) => {
                            return (
                                <p key={index} className="text">
                                    {" "}
                                    {item}{" "}
                                </p>
                            );
                        })}
                    </div>
                    <p>
                        <span className="titles">Directions</span>
                    </p>
                    <div>
                        {directions.map((item, index) => {
                            return (
                                <p key={index} className="text">
                                    {" "}
                                    {item}{" "}
                                </p>
                            );
                        })}
                    </div>
                    {information && (
                        <div>
                            <p>
                                {" "}
                                <span className="titles">
                                    NUTRITIONAL INFORMATION (per serving){" "}
                                </span>
                            </p>
                            <p>
                                {" "}
                                <span className="text">{information}</span>
                            </p>
                        </div>
                    )}
                    <p>
                        <span className="titles">tip</span>
                    </p>
                    <p>
                        <span className="text">{tip}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExtendedRecipe;
