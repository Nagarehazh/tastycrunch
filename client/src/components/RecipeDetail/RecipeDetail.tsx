import React from 'react'
import { RECIPES_ARRAY, RECIPES_ARRAY_SIN_STEPS } from '../../constants/dietTypes'
import images from '../../assets/diets'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
    useGetRecipeByIdQuery,
    useGetAllRecipesQuery as getAll,
    useUpdateRecipeMutation,
    useGetDietsTypesQuery,
    useDeleteRecipeMutation
} from '../../redux/serverCall'

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
    GoBackButton,
    ContainerModal,
    Form,
    Input,
    ButtonModal,
    SelectType,
    OptionType,
    TextArea,
    ButtonDisabled
} from './RecipeDetailStyles'
import {
    Recipe,
    Loading,
    Modal
} from '..'
import datajson from '../../constants/data_save.json'


interface DietTypes {
    img: string;
    name: string;
}

const RecipeDetail = () => {
    const { id }: any = useParams()
    const [deleteRecipe] = useDeleteRecipeMutation()
    const { data: dataDiet } = useGetDietsTypesQuery();
    const { data, isLoading, error }: any = useGetRecipeByIdQuery(id)
    const { data: dataAll } = getAll("",)
    const [updateRecipe] = useUpdateRecipeMutation()
    const [nameRecipe, setNameRecipe] = React.useState('');
    const [descriptionRecipe, setDescriptionRecipe] = React.useState('');
    const [healthScore, setHealthScore] = React.useState(0);
    const [type, setType] = React.useState<string[]>([])
    const [stepByStep, setStepByStep] = React.useState('')
    const [searching, setSearching] = React.useState('')
    const [modal, setModal] = React.useState(false);
    const [messageDelete, setMessageDelete] = React.useState("");

    const navigate = useNavigate()

    const goBackHandler = () => {
        navigate('/')
    }


    const onSubmitForm = (e: any) => {
        e.preventDefault();
        try {
            updateRecipe({
                id: data.id,
                name: nameRecipe,
                description: descriptionRecipe,
                healthScore: healthScore,
                diets: type,
                steps: stepByStep
            })
        } catch (error) {
            alert("Recipe Name already exists, please try again with another beautiful name")
        }
        window.location.reload()
    }


    const handleAddRecipe = () => {
        setModal(!modal)
    }



    const handleAddTagDiet = (e: { target: { value: string; }; }) => {

        if (type.includes((e as any).target.value)) {
            const index = type.indexOf((e as any).target.value)
            type.splice(index, 1)
            setType([...type])
        } else {
            setType([...type, e.target.value])
        }
    }

    const handleDeleteRecipe = () => {
        deleteRecipe(data.id)
        setMessageDelete("Recipe deleted successfully")
        setTimeout(() => {
            navigate('/home')
        }, 3000)
    }



    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (isLoading) { return <Loading /> }

    if (error) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Link to="/home">Something has gone wrong - Go back</Link>
            </div>
        );
    }

    return (
        <div>
            <HorizontalNav>
                <GoBackButton onClick={goBackHandler}>Go Back</GoBackButton>
                <GoBackButton onClick={handleAddRecipe}>Edit Recipe</GoBackButton>
                {messageDelete ? <p>{messageDelete}</p> : <GoBackButton onClick={handleDeleteRecipe}>Delete Recipe</GoBackButton>}
                <Modal
                    modal={modal}
                    setModal={setModal}

                >
                    <ContainerModal>
                        <Form onSubmit={onSubmitForm}>
                            <Input
                                type="text"
                                placeholder="Recipe Name"
                                value={nameRecipe}
                                onChange={(e) => setNameRecipe(e.target.value)}
                            />
                            {nameRecipe.match(/^[a-zA-Z ]*$/) ? null : <p style={{ color: 'red' }}>Only letters</p>}
                            <Input
                                type="text"
                                placeholder="Description"
                                value={descriptionRecipe}
                                onChange={(e) => setDescriptionRecipe(e.target.value)}
                            />
                            <Input
                                type="number"
                                placeholder="Health Score"
                                value={healthScore}
                                onChange={(e) => setHealthScore(parseInt(e.target.value))}
                            />
                            {(healthScore < 0 || healthScore > 100) && <p style={{ color: "red" }}>Health Score must be between 0 and 100</p>}

                            <label
                                htmlFor='dietselect'
                                style={{ color: 'white', marginBottom: "20px", width: "100%", textAlign: "center" }}
                            >Select all the Diet type that match:</label>
                            <SelectType
                                multiple
                                value={type}
                                onChange={handleAddTagDiet}
                                name="dietselect"
                            >
                                <>
                                    {dataDiet && ((dataDiet as any)).map((diet: DietTypes, index: any) => (
                                        <OptionType key={index} value={diet.name}>{diet.name}</OptionType>
                                    ))}
                                </>
                            </SelectType>
                            <TextArea
                                placeholder="Instructions"
                                value={stepByStep}
                                onChange={(e) => setStepByStep(e.target.value)}
                            />
                            {healthScore < 0 || healthScore > 100 || !nameRecipe.match(/^[a-zA-Z ]*$/) || nameRecipe === "" || descriptionRecipe === "" || type.length === 0 || stepByStep === '' ? <ButtonDisabled disabled>Complete all the fields to Update</ButtonDisabled> : <ButtonModal>Update</ButtonModal>}
                        </Form>
                    </ContainerModal>
                </Modal>
                <TitleApp>TastyCrunch.</TitleApp>
            </HorizontalNav>
            <MainContainer>
                {data !== undefined &&
                    (
                        <RecipeContainer >
                            <RecipeDetailImage src={(data as any).image} />
                            <RecipeDetailContainer>
                                <RecipeDetailTitle>{(data as any).name}</RecipeDetailTitle>
                                <RecipeDetailDescription dangerouslySetInnerHTML={{ __html: (data as any).description }}></RecipeDetailDescription>
                                <ContainerScoreDiet>
                                    <RecipeDetailHealthScore>Health Score: {(data as any).healthScore}</RecipeDetailHealthScore>
                                    <DietContainer>
                                        {(data as any).diets.map((diet: any, index: number) => {
                                            return (
                                                <IconWithName key={index}>
                                                    <DietIcon src={(images as any)[diet]} />
                                                    <h3>{diet}</h3>
                                                </IconWithName>
                                            )
                                        })}
                                    </DietContainer>
                                </ContainerScoreDiet>
                                <RecipeDetailStepByStep dangerouslySetInnerHTML={{ __html: (data as any).stepByStep }}></RecipeDetailStepByStep>
                            </RecipeDetailContainer>
                        </RecipeContainer>
                    )
                }

                <RecipesRecomendationContainer>
                    <h1>You might also like</h1>
                    <RecipesContainer>
                        {dataAll !== undefined && dataAll.slice(0, 11).filter((recipe: any) => recipe.diets.includes((data as any).diets[0])).map((recipe: any, index: number) => {
                            return (
                                <Link to={`/recipe/${recipe.id}`} key={index}>
                                    <Recipe key={index} recipe={recipe} />
                                </Link>
                            )
                        })}
                    </RecipesContainer>
                </RecipesRecomendationContainer>
            </MainContainer>
        </div>
    )
}

export default RecipeDetail