import React from "react";
import { useParams } from "react-router-dom";

const SingleRecipe = () => {
    let { id } = useParams();
    return <div>Hello from SingleRecipe {id}</div>;
};

export default SingleRecipe;
