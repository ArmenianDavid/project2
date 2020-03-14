import React from "react";
import { recipes } from "../Components/Recipes/RecipesData";
import Recipe from "../Components/Recipes/Recipe";
import Banner from "../Components/Banner";
import banner3 from "../img/banner3.jpg";

class Recipes extends React.Component {
    render() {
        console.log("Recipes --", recipes);
        return (
            <div>
                <Banner img={banner3} alt="banner3-img" />
                <div className="recipes-heading">
                    <h2>Most Popular Recipes</h2>
                </div>

                <div className="recipes-container">
                    {recipes.map(item => {
                        return (
                            <Recipe
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
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Recipes;
