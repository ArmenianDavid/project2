// images
import recipe1 from "../../img/recipe1.png";
import recipe2 from "../../img/recipe2.png";
import recipe3 from "../../img/recipe3.png";

export const recipes = [
    {
        id: 1,
        name: "Tropical Smoothie Bowl",
        img: recipe1,
        output: `Makes 2 servings`,
        ingredients: [
            "1 - banana, cut into large chunks, frozen",
            "1 cup - plain Greek yogurt",
            "1 cup - coconut milk",
            "1/4 cup - honey",
            "1/2 cup - frozen pineapple chunks"
        ],
        directions: [
            `Blend the frozen fruit, yogurt, coconut milk and honey until smooth and divide between two bowls.`,

            `Top each bowl with the fresh fruit, toasted coconut, macadamia nuts and chia seeds, eat immediately`
        ],
        information: `Calories 214 kcal; Fat 13 g; Sat Fat 3 g; Carb 23 g; Protein 6 g; Fiber 4 g; Cholesterol 0 mg, Sodium 48 mg; Potassium 182 mg; Calcium 34 mg; Iron 1 mg; Vitamin D 1 mcg`,
        tip: `You can add a scoop of protein powder to the blender to keep the hunger cravings at bay even longer.`
    },
    {
        id: 2,
        name: "DIY Honey Nut Puffed Cereal",
        img: recipe2,
        output: `Makes about 2.5 quarts of cereal clusters`,
        ingredients: [
            "4 1/2 cups - puffed rice",
            "1 cup - sliced almonds",
            "1 1/4 tsp. - ground tumeric",
            "1/2 tsp. - cinnamon",
            "1/3 tsp. - kosher salt",
            "1/4 cup - light brown sugar, lightly packed",
            "2 T + 1 tsp. (32g) - unsalted butter",
            "1/3 cup - honey",
            "1/2 tsp. - baking soda",
            "1 T - raw sesame seeds"
        ],
        directions: [
            `Heat the oven to 325°F.`,

            `Line a rimmed baking sheet with parchment and set aside.`,

            `In a large heatproof bowl, combine the puffed rice, almonds, turmeric, cinnamon and salt. `,

            `In a small pot, stirring occasionally, heat the brown sugar, butter and honey, until they have been simmering in slow, steady large bubbles for 1 - 2 minutes (roughly 250°F). `,

            `Remove from heat and whisk in the baking soda. Immediately pour the mixture over the dry ingredients. Stir well with a wood spoon, making sure to mix in all the spices and seeds that have fallen to the bottom of the bowl, and then spread the mixture on the prepared baking sheet.`,

            `Bake for 15 minutes, stirring halfway through. Allow to cool completely at room temperature. Break the pieces and place into an airtight container to store.`,

            `Serve with your milk of choice, which will become "Golden Milk" when mixed with the cereal!`,

            `Recipe courtesy of Chef Jessica Koslow, made for the National Honey Board`
        ],
        tip: `Instead of puffed rice, you can substitute other puffed grains like millet.`
    },
    {
        id: 3,
        name: "Chocolate PB Energy Bites",
        img: recipe3,
        output: `Makes 15 servings, each serving is 2 bites`,
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
