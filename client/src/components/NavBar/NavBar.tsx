import React from 'react';
import images from '../../assets/diets'
import searchImg from '../../assets/images/search.png'
import myRecipes from '../../assets/images/myRecipes.png'
import menuimg from '../../assets/images/menu.png'
import {
    NavBarContainer,
    NavBarLogo,
    AppBar,
    ToolBar,
    Hr,
    DietContainer,
    DietIcon,
    IconWithName,
    HorizontalNav,
    Search,
    TitleApp,
    SeacrhButton,
    CreateContainer,
    CreateIcon,
    ContainerModal,
    Form,
    Input,
    ButtonModal,
    SelectType,
    OptionType,
    TextArea,
    SearchForm,
    MenuButton,
    MenuIcon,
    AppBarDrawer
} from './NavBarStyles';
import { useGetDietsTypesQuery, useCreateRecipeMutation, useGetMyRecipesQuery } from '../../redux/serverCall';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/searchRedux';
import { setOwnRecipes } from '../../redux/ownrecipesRedux';
import { setDiet } from '../../redux/dietRedux';
import { Modal } from '..'


interface DietTypes {
    img: string;
    name: string;
}


const NavBar = () => {
    const dispatch = useDispatch()
    const { data: dataDiet } = useGetDietsTypesQuery();
    const [createRecipe] = useCreateRecipeMutation();
    const { data: dataMyRecipes } = useGetMyRecipesQuery();
    const [nameRecipe, setNameRecipe] = React.useState('');
    const [descriptionRecipe, setDescriptionRecipe] = React.useState('');
    const [healthScore, setHealthScore] = React.useState('');
    const [type, setType] = React.useState<string[]>([])
    const [stepByStep, setStepByStep] = React.useState('')
    const [searching, setSearching] = React.useState('')
    const [modal, setModal] = React.useState(false);
    const [drawer, setDrawer] = React.useState(false);



    const onSubmitForm = (e: any) => {
        e.preventDefault();
        createRecipe({
            name: nameRecipe,
            description: descriptionRecipe,
            healthScore: healthScore,
            stepByStep: stepByStep,
            diets: type,
        })
        window.location.reload()

    }

    const handleAddRecipe = () => {
        setModal(!modal)
    }

    const handleSearch = (e: any) => {
        e.preventDefault()
        dispatch(setSearch(searching))
        setSearching('')
    }

    const handleSelectDiet = (dietName: string) => {
        dispatch(setDiet(dietName))
    }

    const handleGetMyRecipes = () => {
        dispatch(setOwnRecipes(dataMyRecipes))

        if (dataMyRecipes && (dataMyRecipes as any).length === 0) {
            alert('You have no recipes, create one!')
        }

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


    const handleGetRecipes = () => {
        //active drawer
        console.log('drawer')
        setDrawer(!drawer)
        console.log(drawer)
       
    }



    return (
        <NavBarContainer>
            {drawer && 
            
            <AppBarDrawer>
                <ToolBar>
                    <NavBarLogo>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="svg8" version="1.1" viewBox="0 0 95.05 113.63">
                            <defs id="defs2">
                                <linearGradient id="linearGradient857">
                                    <stop id="stop853" offset="0" stopColor="#d089ff" stopOpacity="1" />
                                    <stop id="stop855" offset="1" stopColor="#7f00f5" stopOpacity="1" />
                                </linearGradient>
                                <linearGradient id="linearGradient859" x1="37.47" x2="62.79" y1="9.1" y2="90.19" gradientUnits="userSpaceOnUse" xlinkHref="#linearGradient857" />
                            </defs>
                            <g id="layer1" transform="translate(.28 -.13)">
                                <path id="rect835" fill="#21034f" fillOpacity="1" strokeWidth=".4" d="M-.28.13h95.05v113.63H-.28z" opacity="1" />
                                <path id="flame" fill="url(#linearGradient859)" fillOpacity="1" strokeWidth=".87" d="M76.12 66.56c0 15.63-13.23 28.31-29.54 28.31-16.3 0-29.73-12.68-29.53-28.31.28-21.7 21.5-33.27 22.1-50.09 10.79 2.2 36.97 24.8 36.97 50.09z" opacity="1" />

                                <circle id="ci1" cx="46.58" cy="66.56" r="1" />
                                <circle id="ci2" cx="46.58" cy="66.56" r="1" />
                                <circle id="ci3" cx="46.58" cy="66.56" r="1" />
                                <circle id="ci4" cx="46.58" cy="66.56" r="1" />


                                <path id="rect848" fill="#7f00f5" fillOpacity="1" strokeWidth=".4" d="M103.06 22.47h16.68v7.2h-13.22c-.67 0-.88.58-.88.58z" opacity="1" transform="rotate(39.18)" />
                                <path id="circle843" fill="#21034f" fillOpacity="1" strokeWidth=".4" d="M50.77 61.02a7 7 0 10-8.78 10.9c3.44 2.77 5.95 1.3 8.68 3.5l25.66 20.66 5.36-6.65L56.45 69.1c-3.21-2.59-1.98-5.1-5.68-8.08z" opacity="1" />
                                <ellipse id="path851" cx="46.37" cy="63.24" fill="#d594ff" fillOpacity="1" strokeWidth=".4" opacity="1" rx="2.01" ry="1.24" />
                            </g>
                        </svg>
                    </NavBarLogo>
                    <Hr />
                    <CreateContainer>
                        <CreateIcon onClick={handleAddRecipe}>+</CreateIcon>
                        <h2>Create Recipe</h2>
                    </CreateContainer>
                    <CreateContainer>
                        <CreateIcon onClick={handleGetMyRecipes}><DietIcon src={myRecipes} /></CreateIcon>
                        <h2>My Recipes</h2>
                    </CreateContainer>
                    <Hr />
                    <DietContainer>
                        <>
                            <h2>Diets</h2>
                            {dataDiet && ((dataDiet as any)).map((diet: DietTypes, index = 1) => (
                                <IconWithName key={index}
                                    onClick={() => handleSelectDiet(diet.name)}
                                >
                                    <DietIcon src={(images as any)[diet.name]} />
                                    <h3>{diet.name}</h3>
                                </IconWithName>
                            ))}
                        </>
                    </DietContainer>
                    <h5 style={{ color: 'white', marginBottom: "20px", backgroundColor: "#21034f", width: "100%", textAlign: "center" }}>Designed by © Harley Zapata</h5>
                </ToolBar>
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
                                required
                            />
                            <Input
                                type="text"
                                placeholder="Description"
                                value={descriptionRecipe}
                                onChange={(e) => setDescriptionRecipe(e.target.value)}
                                required
                            />
                            <Input
                                type="number"
                                placeholder="Health Score"
                                max={100}
                                min={0}
                                value={healthScore}
                                onChange={(e) => setHealthScore(e.target.value)}
                                required
                            />
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
                                    {/* <OptionType value="">Diet Type</OptionType> */}
                                    {dataDiet && ((dataDiet as any)).map((diet: DietTypes, index: any) => (
                                        <OptionType key={index} value={diet.name}>{diet.name}</OptionType>
                                    ))}
                                </>
                            </SelectType>
                            <TextArea
                                placeholder="Instructions"
                                value={stepByStep}
                                onChange={(e) => setStepByStep(e.target.value)}
                                required
                            />
                            <ButtonModal>Create</ButtonModal>
                        </Form>
                    </ContainerModal>
                </Modal>
            </AppBarDrawer>
            

            }

            <AppBar>
                <ToolBar>
                    <NavBarLogo>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="svg8" version="1.1" viewBox="0 0 95.05 113.63">
                            <defs id="defs2">
                                <linearGradient id="linearGradient857">
                                    <stop id="stop853" offset="0" stopColor="#d089ff" stopOpacity="1" />
                                    <stop id="stop855" offset="1" stopColor="#7f00f5" stopOpacity="1" />
                                </linearGradient>
                                <linearGradient id="linearGradient859" x1="37.47" x2="62.79" y1="9.1" y2="90.19" gradientUnits="userSpaceOnUse" xlinkHref="#linearGradient857" />
                            </defs>
                            <g id="layer1" transform="translate(.28 -.13)">
                                <path id="rect835" fill="#21034f" fillOpacity="1" strokeWidth=".4" d="M-.28.13h95.05v113.63H-.28z" opacity="1" />
                                <path id="flame" fill="url(#linearGradient859)" fillOpacity="1" strokeWidth=".87" d="M76.12 66.56c0 15.63-13.23 28.31-29.54 28.31-16.3 0-29.73-12.68-29.53-28.31.28-21.7 21.5-33.27 22.1-50.09 10.79 2.2 36.97 24.8 36.97 50.09z" opacity="1" />

                                <circle id="ci1" cx="46.58" cy="66.56" r="1" />
                                <circle id="ci2" cx="46.58" cy="66.56" r="1" />
                                <circle id="ci3" cx="46.58" cy="66.56" r="1" />
                                <circle id="ci4" cx="46.58" cy="66.56" r="1" />


                                <path id="rect848" fill="#7f00f5" fillOpacity="1" strokeWidth=".4" d="M103.06 22.47h16.68v7.2h-13.22c-.67 0-.88.58-.88.58z" opacity="1" transform="rotate(39.18)" />
                                <path id="circle843" fill="#21034f" fillOpacity="1" strokeWidth=".4" d="M50.77 61.02a7 7 0 10-8.78 10.9c3.44 2.77 5.95 1.3 8.68 3.5l25.66 20.66 5.36-6.65L56.45 69.1c-3.21-2.59-1.98-5.1-5.68-8.08z" opacity="1" />
                                <ellipse id="path851" cx="46.37" cy="63.24" fill="#d594ff" fillOpacity="1" strokeWidth=".4" opacity="1" rx="2.01" ry="1.24" />
                            </g>
                        </svg>
                    </NavBarLogo>
                    <Hr />
                    <CreateContainer>
                        <CreateIcon onClick={handleAddRecipe}>+</CreateIcon>
                        <h2>Create Recipe</h2>
                    </CreateContainer>
                    <CreateContainer>
                        <CreateIcon onClick={handleGetMyRecipes}><DietIcon src={myRecipes} /></CreateIcon>
                        <h2>My Recipes</h2>
                    </CreateContainer>
                    <Hr />
                    <DietContainer>
                        <>
                            <h2>Diets</h2>
                            {dataDiet && ((dataDiet as any)).map((diet: DietTypes, index = 1) => (
                                <IconWithName key={index}
                                    onClick={() => handleSelectDiet(diet.name)}
                                >
                                    <DietIcon src={(images as any)[diet.name]} />
                                    <h3>{diet.name}</h3>
                                </IconWithName>
                            ))}
                        </>
                    </DietContainer>
                    <h5 style={{ color: 'white', marginBottom: "20px", backgroundColor: "#21034f", width: "100%", textAlign: "center" }}>Designed by © Harley Zapata</h5>
                </ToolBar>
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
                                required
                            />
                            <Input
                                type="text"
                                placeholder="Description"
                                value={descriptionRecipe}
                                onChange={(e) => setDescriptionRecipe(e.target.value)}
                                required
                            />
                            <Input
                                type="number"
                                placeholder="Health Score"
                                max={100}
                                min={0}
                                value={healthScore}
                                onChange={(e) => setHealthScore(e.target.value)}
                                required
                            />
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
                                    {/* <OptionType value="">Diet Type</OptionType> */}
                                    {dataDiet && ((dataDiet as any)).map((diet: DietTypes, index: any) => (
                                        <OptionType key={index} value={diet.name}>{diet.name}</OptionType>
                                    ))}
                                </>
                            </SelectType>
                            <TextArea
                                placeholder="Instructions"
                                value={stepByStep}
                                onChange={(e) => setStepByStep(e.target.value)}
                                required
                            />
                            <ButtonModal>Create</ButtonModal>
                        </Form>
                    </ContainerModal>
                </Modal>
            </AppBar>

            <HorizontalNav>
                <MenuButton onClick={handleGetRecipes}>
                    <MenuIcon src={menuimg} alt="menu"/>
                </MenuButton>
                <TitleApp>TastyCrunch.</TitleApp>
                <SearchForm onSubmit={handleSearch}>
                    <Search
                        type="text"
                        placeholder="Search a recipe"
                        value={searching}
                        onChange={(e) => setSearching(e.target.value)}

                    />
                    <SeacrhButton><img src={searchImg} alt="search" /></SeacrhButton>
                </SearchForm>
            </HorizontalNav>
        </NavBarContainer>
    )
}

export default NavBar;
