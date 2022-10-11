import React from 'react'
import { RECIPES_ARRAY, RECIPES_ARRAY_SIN_STEPS } from '../../constants/dietTypes'
import images from '../../assets/diets'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetRecipeByIdQuery, useGetAllRecipesQuery as getAll } from '../../redux/serverCall'

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
    const { id } : any = useParams()
    
    const {data, isLoading, error} = useGetRecipeByIdQuery(id)
    
    const {data: dataAll} = getAll("", )

    const [recommendation, setRecommendation] = React.useState<any>([])

           console.log(dataAll)

    
    const navigate = useNavigate()

    const [dietType, setDietType] = React.useState('')

    // if(dataAll !== undefined){
    //     //filter by diet
    //     const filtered = (dataAll as any).filter((recipe: any) => {
    //         return recipe.diets.includes(dietType)
    //     })
    //     setRecommendation(filtered)
    // }
            


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
                {data !== undefined &&  
                    (
                        <RecipeContainer >
                            <RecipeDetailImage src={(data as any).image} />
                            <RecipeDetailContainer>
                                <RecipeDetailTitle>{(data as any).name}</RecipeDetailTitle>
                                <RecipeDetailDescription dangerouslySetInnerHTML={{__html: (data as any).description}}></RecipeDetailDescription>
                                <ContainerScoreDiet>
                                    <RecipeDetailHealthScore>Health Score: {(data as any).healthScore}</RecipeDetailHealthScore>
                                    <DietContainer>
                                        {(data as any).diets.map((diet: any, index: number) => {
                                            return (
                                                <IconWithName key={index}>
                                                    <DietIcon src={(images as any)[diet]} onClick={() => handleSelectDiet(diet)} />
                                                    <h3>{((diet && dietType === "" && setDietType(diet)) || diet)}</h3>
                                                </IconWithName>
                                            )
                                        })}
                                    </DietContainer>
                                </ContainerScoreDiet>
                                <RecipeDetailStepByStep dangerouslySetInnerHTML={{__html: (data as any).stepByStep}}></RecipeDetailStepByStep>
                            </RecipeDetailContainer>
                        </RecipeContainer>
                    )
                }
                
                <RecipesRecomendationContainer>
                    <h1>You might also like</h1>
                    <RecipesContainer>
                        {recommendation.lenght > 0 && recommendation.map((recipe: any, index: any) => {
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