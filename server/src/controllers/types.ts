enum DIETS {
    GLUTEN_FREE = "gluten_free",
    KETOGENIC = "ketogenic",
    VEGETARIAN = "vegetarian",
    LACTO_VEGETARIAN = "lacto-vegetarian",
    OVO_VEGETARIAN = "ovo-vegetarian",
    VEGAN = "vegan",
    PESCETARIAN = "pescetarian",
    PALEO = "paleo",
    PRIMAL = "primal",
    LOW_FODMAP = "low_fodmap",
    WHOLE30 = "whole30",    
}

const DIETS_ARRAY = [
    {
        name: DIETS.VEGAN,
    },
    {
        name: DIETS.VEGETARIAN,
    },
    {
        name: DIETS.PALEO,
    },
    {
        name: DIETS.PESCETARIAN,
    },
    {
        name: DIETS.LACTO_VEGETARIAN,
    },
    {
        name: DIETS.OVO_VEGETARIAN,
    },
    {
        name: DIETS.PALEO,
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