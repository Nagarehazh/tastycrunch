import React from 'react'
import images from '../../assets/diets'
import defaultImg from '../../assets/images/defaultImage.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
    useGetRecipeByIdQuery,
    useGetAllRecipesQuery as getAll,
    useUpdateRecipeMutation,
    useGetDietsTypesQuery,
    useDeleteRecipeMutation
} from '../../redux/serverCall'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux/searchRedux'
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
    ButtonDisabled,
    EditButton
} from './RecipeDetailStyles'
import {
    Recipe,
    Loading,
    Modal
} from '..'

interface DietTypes {
    img: string;
    name: string;
}

const RecipeDetail = () => {
    const { id }: any = useParams()
    const dispatch = useDispatch()
    const [deleteRecipe] = useDeleteRecipeMutation()
    const { data: dataDiet }: any = useGetDietsTypesQuery();
    const { data, isLoading, error }: any = useGetRecipeByIdQuery(id,)
    const { data: dataAll } = getAll("",)
    const [updateRecipe] = useUpdateRecipeMutation()
    const [nameRecipe, setNameRecipe] = React.useState('');
    const [descriptionRecipe, setDescriptionRecipe] = React.useState('');
    const [healthScore, setHealthScore] = React.useState("");
    const [type, setType] = React.useState<string[]>([])
    const [stepByStep, setStepByStep] = React.useState('')
    const [modal, setModal] = React.useState(false);
    const [messageDelete, setMessageDelete] = React.useState("");
    const [searching, ] = React.useState('')
    
    const navigate = useNavigate()


    const goBackHandler = () => {
        dispatch(setSearch(searching))
        navigate('/recipes')
    }

    const onSubmitForm = (e: any) => {
        e.preventDefault();
        try {
            updateRecipe({
                id: id,
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
            window.location.reload()
        }, 1200)
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

    if (data.error) {
        setTimeout(() => {
            navigate('/recipes')
        }, 3000)
    }



    return (
        <div>
            {data.error ? <Loading /> :
                <>
                    <HorizontalNav>
                        <GoBackButton onClick={goBackHandler}>Go Back</GoBackButton>
                        {id.length === 36 && (
                            <>
                                {messageDelete ? <p style={{ color: "green" }}>{messageDelete}</p> :
                                    <>
                                        <EditButton onClick={handleAddRecipe}>Edit Recipe</EditButton>
                                        <GoBackButton onClick={handleDeleteRecipe}>Delete Recipe</GoBackButton>
                                    </>
                                }
                            </>
                        )}

                        <TitleApp>TastyCrunch.</TitleApp>
                    </HorizontalNav>
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
                                    onChange={(e) => setHealthScore(e.target.value)}
                                />
                                {(parseInt(healthScore) < 0 || parseInt(healthScore) > 100) && <p style={{ color: "red" }}>Health Score must be between 0 and 100</p>}

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
                                {parseInt(healthScore) < 0 || parseInt(healthScore) > 100 || !nameRecipe.match(/^[a-zA-Z ]*$/) || nameRecipe === "" || descriptionRecipe === "" || type.length === 0 || stepByStep === '' ? <ButtonDisabled disabled>Complete all the fields</ButtonDisabled> : <ButtonModal>Create</ButtonModal>}
                            </Form>
                        </ContainerModal>
                    </Modal>
                    <MainContainer>
                        {data !== undefined && data &&
                            (
                                <RecipeContainer >
                                    <RecipeDetailImage src={(data as any).image || defaultImg} />
                                    <RecipeDetailContainer>
                                        <RecipeDetailTitle>{(data as any).name}</RecipeDetailTitle>
                                        <RecipeDetailDescription dangerouslySetInnerHTML={{ __html: (data as any).description }}></RecipeDetailDescription>
                                        <ContainerScoreDiet>
                                            <RecipeDetailHealthScore>Health Score: {(data as any).healthScore}</RecipeDetailHealthScore>
                                            <DietContainer>
                                                {data !== undefined && data && (data as any).diets.map((diet: any, index: number) => {
                                                    return (
                                                        <IconWithName key={index}>
                                                            {id.length === 36 ? (
                                                                <>
                                                                    <DietIcon src={(images as any)[diet.name]} />
                                                                    <h3>{diet.name}</h3>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <DietIcon src={(images as any)[diet]} />
                                                                    <h3>{diet}</h3>
                                                                </>
                                                            )}
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
                                {dataAll !== undefined && dataAll.slice(0, 11).filter((recipe: any) => id.length === 36
                                    ? recipe.diets.includes((data as any).diets[0].name)
                                    : recipe.diets.includes((data as any).diets[0]))
                                    .map((recipe: any, index: number) => {
                                        return (
                                            <Link to={`/recipes/${recipe.id}`} key={index}>
                                                <Recipe key={index} recipe={recipe} />
                                            </Link>
                                        )
                                    })}
                            </RecipesContainer>
                        </RecipesRecomendationContainer>
                    </MainContainer>
                </>
            }
        </div>
    )
}

export default RecipeDetail