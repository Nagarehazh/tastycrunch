// import veganImg from '../assets/diets/vegan.png';
// import vegetarianImg from '../assets/diets/vegetarian.png';
// import paleoImg from '../assets/diets/paleo.png';
// import pescetarianImg from '../assets/diets/pescetarian.png';
// import lactoVegetarianImg from '../assets/diets/lacto.png';
// import ovoVegetarianImg from '../assets/diets/ovo.png';
// import primalImg from '../assets/diets/primal.png';
// import lowFodmapImg from '../assets/diets/fodmap.png';
// import whole30Img from '../assets/diets/whole.png';

enum DIETS {
    GLUTEN_FREE = "gluten free",
    KETOGENIC = "ketogenic",
    VEGETARIAN = "vegetarian",
    LACTO_VEGETARIAN = "lacto vegetarian",
    OVO_VEGETARIAN = "ovo vegetarian",
    VEGAN = "vegan",
    PESCETARIAN = "pescetarian",
    PALEO = "paleo",
    PRIMAL = "primal",
    LOW_FODMAP = "low fodmap",
    WHOLE30 = "whole 30",    
}

const DIETS_ARRAY = [
    {   
        // img: veganImg,
        name: DIETS.VEGAN,
    },
    {   
        // img: vegetarianImg,
        name: DIETS.VEGETARIAN,
    },
    {
        // img: paleoImg,
        name: DIETS.PALEO,
    },
    {
        // img: pescetarianImg,
        name: DIETS.PESCETARIAN,
    },
    {
        // img: lactoVegetarianImg,
        name: DIETS.LACTO_VEGETARIAN,
    },
    {
        // img: ovoVegetarianImg,
        name: DIETS.OVO_VEGETARIAN,
    }, 
    {
        // img: primalImg,
        name: DIETS.PRIMAL,
    },
    {
        // img: lowFodmapImg,
        name: DIETS.LOW_FODMAP,
    },
    {
        // img: whole30Img,
        name: DIETS.WHOLE30,
    }
]

            // name,
            // description,
            // healthScore,
            // stepByStep,
            // image,
            // diets
const RECIPES_ARRAY = [
    {
        id: 1,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!, ",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 2,
        name: "PP1Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 1,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 3,
        name: "Aegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 4,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 5,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 6,
        name: "BVegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 7,
        name: "PP50Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 50,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 8,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 9,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
     {   id: 10,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 11,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 12,
        name: "Cegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 13,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 14,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
     {   id: 15,
        name: "Degan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        stepByStep: "Preheat the oven to 425 degrees F. Line a baking sheet with parchment paper. In a large bowl, combine the flour, salt, and sugar. Add the olive oil and water and mix until a dough forms. Knead the dough for 5 minutes, then divide into 2 equal pieces. Roll each piece into a ball and place on the prepared baking sheet. Use your hands to flatten the dough into a 12-inch circle. Bake for 10 minutes, then remove from the oven and top with the cashew cheese, pizza sauce, and toppings. Bake for 10-15 minutes, or until the cheese is melted and the crust is golden brown. Slice and serve.",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    }
        
]


const RECIPES_ARRAY_SIN_STEPS = [
    {
        id: 1,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!, ",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 2,
        name: "PP1Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        healthScore: 1,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 3,
        name: "Aegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 4,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    },
    {
        id: 5,
        name: "Vegan Pizza",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        description: "This vegan pizza is made with a simple homemade pizza dough, a creamy cashew cheese, and your favorite pizza toppings. It's easy to make and tastes just like the real thing!",
        healthScore: 100,
        diets: [DIETS.VEGAN, DIETS.VEGETARIAN, DIETS.GLUTEN_FREE],
    }
]

export { DIETS, DIETS_ARRAY, RECIPES_ARRAY, RECIPES_ARRAY_SIN_STEPS }