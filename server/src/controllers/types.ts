enum DIETS {
    GLUTEN_FREE = "gluten free",
    KETOGENIC = "ketogenic",
    LACTO_OVO_VEGETARIAN = "lacto ovo vegetarian",
    VEGAN = "vegan",
    PESCETARIAN = "pescatarian",
    PALEO = "paleolithic",
    PRIMAL = "primal",
    LOW_FODMAP = "fodmap friendly",
    WHOLE30 = "whole 30",    
}

const DIETS_ARRAY = [
    { 
        name: DIETS.GLUTEN_FREE,
    },
    {
        name: DIETS.KETOGENIC,
    },
    {   
        name: DIETS.VEGAN,
    },
    {
        name: DIETS.PALEO,
    },
    {
        name: DIETS.PESCETARIAN,
    },
    {
        name: DIETS.LACTO_OVO_VEGETARIAN,
    },
    {
        name: DIETS.PRIMAL,
    },
    {
        name: DIETS.LOW_FODMAP,
    },
    {   
        name: DIETS.WHOLE30,
    }
]

export { DIETS, DIETS_ARRAY }