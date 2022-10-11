import React from 'react'
import { RECIPES_ARRAY, RECIPES_ARRAY_SIN_STEPS } from '../../constants/dietTypes'
import images from '../../assets/diets'
import { Link, useNavigate } from 'react-router-dom'
import {
    MainContainer,
    RecipeContainer,
    RecipesRecomendationContainer,
    RecipeDetailContainer,
    RecipeDetailImage,
    RecipeDetailTitle,
    RecipeDetailDescription,
    RecipeDetailHealthScore,
    RecipeDetailStepByStep,
    ContainerScoreDiet,
    DietContainer,
    IconWithName,
    DietIcon,
    RecipesContainer,
    HorizontalNav,
    TitleApp,
    GoBackButton
} from './RecipeDetailStyles'
import {
    Recipe

} from '..'
import datajson from '../../constants/data_save.json'



const RecipeDetail = () => {
    const navigate = useNavigate()

    const [dietType, setDietType] = React.useState('')

    const handleSelectDiet = (dietName: string) => {

    }


    const goBackHandler = () => {
        navigate('/')
    }


    return (
        <div>
            <HorizontalNav>
                <GoBackButton onClick={goBackHandler}>Go Back</GoBackButton>
                <TitleApp>TastyCrunch.</TitleApp>
            </HorizontalNav>
            <MainContainer>
                {RECIPES_ARRAY.slice(0, 1).map((recipe, index) => {
                    return (
                        <RecipeContainer key={index}>
                            <RecipeDetailImage src={recipe.image} />
                            <RecipeDetailContainer>
                                <RecipeDetailTitle>{recipe.name}</RecipeDetailTitle>
                                <RecipeDetailDescription>{recipe.description}</RecipeDetailDescription>
                                <ContainerScoreDiet>
                                    <RecipeDetailHealthScore>Health Score: {recipe.healthScore}</RecipeDetailHealthScore>
                                    <DietContainer>
                                        {recipe.diets.map((diet: any, index: number) => {
                                            return (
                                                <IconWithName key={index}>
                                                    <DietIcon src={(images as any)[diet]} onClick={() => handleSelectDiet(diet)} />
                                                    <h3>{((diet && dietType === "" && setDietType(diet)) || diet)}</h3>
                                                </IconWithName>
                                            )
                                        })}
                                    </DietContainer>
                                </ContainerScoreDiet>
                                <RecipeDetailStepByStep>{recipe.stepByStep}</RecipeDetailStepByStep>
                            </RecipeDetailContainer>
                        </RecipeContainer>
                    )
                })}
                <RecipesRecomendationContainer>
                    <h1>You might also like</h1>
                    <RecipesContainer>
                        {RECIPES_ARRAY_SIN_STEPS.map((recipe, index) => {
                            return (
                                <Link to={`/recipe/${recipe.id}`} key={index}>
                                    <Recipe recipe={recipe} />
                                </Link>
                            )
                        }
                        )}
                    </RecipesContainer>
                </RecipesRecomendationContainer>
            </MainContainer>
        </div>
    )
}

export default RecipeDetail