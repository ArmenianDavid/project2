import React from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../Components/Recipes/RecipesData";

const SingleRecipe = () => {
    let { id } = useParams();

    const chosenRecipe = recipes.find(item => item.id == id);

    console.log("chosen Recipe", chosenRecipe);

    return <div>Hello from SingleRecipe </div>;
};

export default SingleRecipe;
