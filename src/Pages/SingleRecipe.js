import React from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../Components/Recipes/RecipesData";
// components
import ExtendedRecipe from "../Components/Recipes/ExtendedRecipe";

const SingleRecipe = () => {
    let { id } = useParams();

    const chosenRecipe = recipes.find(item => item.id == id);

    console.log("chosen Recipe", chosenRecipe);

    return (
        <div>
            <ExtendedRecipe />
        </div>
    );
};

export default SingleRecipe;
