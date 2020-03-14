import React from "react";
// images
import recipe1 from "../../img/recipe1";
import recipe2 from "../../img/recipe2";
import recipe3 from "../../img/recipe3";

const recipes = [
    {
        img: { image: recipe1 },
        yield: `Makes 15 servings, each serving is 2 bites`,
        ingredients: [
            "1/2 cup - peanuts, finely chopped",
            " 1 1/2 cup - old fashioned oats, divided",
            "1/3 cup - flax seeds",
            "1/2 cup - almond flour",
            "3 T - unsweetened cocoa",
            "2 T - peanut butter powder",
            "2/3 cup - mini chocolate chips, divided",
            "1/2 cup - peanut butter",
            "1/3 cup + 1 T - honey",
            "2 T - almond or soy milk"
        ],
        directions: [
            "Line a sheet pan with parchment or wax paper.",

            "Place peanuts in a small bowl, set aside.",

            `In a food processor, combine 1 cup of the oats, flax seed, almond flour, cocoa, peanut butter powder and 1/3 cup of the chocolate chips. Pulse several times until it resembles coarse meal.`,

            `Add the peanut butter, honey and almond milk to the oat mixture and process until the mixture comes together.`,

            `Transfer the oat mixture to a large bowl and mix in the remaining oats and chocolate chips, your hands work best for this!`,
            `Scoop out 1” clusters of the mixture and roll  into a ball with your hands.  Then dip the bites in the finely chopped peanuts.  Place each ball on the sheet pan and chill in the refrigerator. `,

            `When the bites are chilled and set, store in an airtight container for up to a week.`
        ],
        information: `Calories 214 kcal; Fat 13 g; Sat Fat 3 g; Carb 23 g; Protein 6 g; Fiber 4 g; Cholesterol 0 mg, Sodium 48 mg; Potassium 182 mg; Calcium 34 mg; Iron 1 mg; Vitamin D 1 mcg`,
        tip: `You can substitute the peanuts, peanut butter powder and peanut butter for almonds, additional almond flour and almond butter.`
    }
];
