import React from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../Components/Recipes/RecipesData";
// components
import ExtendedRecipe from "../Components/Recipes/ExtendedRecipe";

const SingleRecipe = () => {
    let { id } = useParams();

    const item = recipes.find(item => item.id == id);

    return (
        <div>
            <ExtendedRecipe
                id={item.id}
                name={item.name}
                img={item.img}
                output={item.output}
                ingredients={item.ingredients}
                directions={item.ingredients}
                information={item.information}
                tip={item.tip}
                key={item.id}
            />
        </div>
    );
};

export default SingleRecipe;
