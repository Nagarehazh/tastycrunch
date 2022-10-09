import React from 'react'
import { Recipe } from '..'
import {
  RecipesContainer,
  Container,
  WrapperFilter,
  FilterContainer,
  Filter,
  Select,
  Option,
  WrapperPagination,
  PaginationContainer,
  PaginationButton,
  PaginationNumber,
  PaginationArrowLeft,
  PaginationArrowRight,
  MainWrapper,
  Label,
  ContainerLabel,
  ButtonViewAll
} from './RecipesStyles'
import { useSelector } from 'react-redux'
import { setSearch } from '../../redux/searchRedux'
import { useDispatch } from 'react-redux'

interface RecipesProps {
  recipes: any
  dietclasification: any
  myrecipes: any
}


const Recipes = (props: RecipesProps) => {
  const { recipes, dietclasification, myrecipes} = props;
  const dispatch = useDispatch()

  

  const [dietType, setDietType] = React.useState(false)

  let { payload } = useSelector(setSearch)
  
  const [dietPayload, setDietPayload] = React.useState([])
  
  const [filtered, setFiltered] = React.useState(recipes)
  const [, setSort] = React.useState('')
  const [, setHealthScore] = React.useState('')
  const [currentPage, setCurrentPage] = React.useState(1)
  const [recipesPerPage] = React.useState(9)
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const [actualRecipes, setActualRecipes] = React.useState(filtered && (filtered as any).slice(indexOfFirstRecipe, indexOfLastRecipe))


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil((recipes !== undefined && (recipes as any).length) / recipesPerPage); i++) {
    pageNumbers.push(i)
  }
  

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleViewAll = () => {
    window.location.reload()
    // setDietType(!dietType)
    // setCurrentPage(1)
    // setFiltered(recipes)
    // setDietPayload([])
    // setActualRecipes(recipes)
  }

  const handleSort = (e: any) => {
    setSort(e)
    if (e === 'desc') {
      setCurrentPage(1)
      setActualRecipes(recipes && (recipes as any).sort((a: { name: number }, b: { name: number }) => (a.name > b.name) ? 1 : -1))
    } else if (e === 'asc') {
      setCurrentPage(1)
      setActualRecipes(recipes && (recipes as any).sort((a: { name: number }, b: { name: number }) => (a.name > b.name) ? -1 : 1))
    }
  }

  const handleHealthScore = (e: any) => {
    setHealthScore(e)
    if (e === 'highest') {
      setCurrentPage(1)
      setActualRecipes(recipes && (recipes as any).sort((a: { healthScore: number }, b: { healthScore: number }) => (a.healthScore > b.healthScore) ? -1 : 1))
    } else if (e === 'lowest') {
      setCurrentPage(1)
      setActualRecipes(recipes && (recipes as any).sort((a: { healthScore: number }, b: { healthScore: number }) => (a.healthScore > b.healthScore) ? 1 : -1))
    } 
  }


  React.useEffect(() => {
    const currentRecipes = filtered && (filtered as any).slice(indexOfFirstRecipe, indexOfLastRecipe)
    setActualRecipes(currentRecipes)

  }, [currentPage, recipesPerPage, filtered, indexOfFirstRecipe, indexOfLastRecipe])


  React.useEffect(() => {
    if ((payload.search.search !== undefined && payload.search.search !== null) && (payload.search.search !== '')) {
      const filterArray = recipes && (recipes as any).filter((recipe: { name: string }) => recipe.name.toLocaleLowerCase().includes(payload.search.search.toLocaleLowerCase()))
      setDietType(true)
      setCurrentPage(1)
      return setFiltered(filterArray)
    } 
  
  }, [payload])


  React.useEffect(() => {
        
    if (myrecipes.ownrecipes.ownrecipes !== undefined && myrecipes.ownrecipes.ownrecipes !== null && myrecipes.ownrecipes.ownrecipes.length > 0) {
      setDietType(true)
      setCurrentPage(1)
      setActualRecipes(myrecipes.ownrecipes.ownrecipes)
    }
      
 }, [myrecipes])

  React.useEffect(() => {
    if (dietclasification.diet.diets !== undefined && dietclasification.diet.diets !== null && dietclasification.diet.diets !== ' ') {
      
      if(dietPayload.length === 0){
        setDietPayload(dietclasification)
      console.log("Está aquí-----------------------")
      const filterClasification = recipes && (recipes as any).filter((recipe: { diets: string[] }) => recipe.diets.includes(dietclasification.diet.diets))
      
      setCurrentPage(1)
      setDietType(true)
      dispatch(setSearch(""))
      setActualRecipes(filterClasification)
      setDietPayload([])
      }

    } 
  }, [dietclasification])



  
  return (
    <Container>
      <MainWrapper>
        <WrapperPagination>
          {!!dietType
            ? (
              <PaginationContainer>
                <h2>{actualRecipes.length} results</h2>
                <ButtonViewAll onClick={handleViewAll}>View All</ButtonViewAll>
              </PaginationContainer>
            )
            : (
              <PaginationContainer>
                <PaginationButton>
                  <PaginationArrowLeft onClick={handlePrevPage}>{`<`}</PaginationArrowLeft>
                </PaginationButton>
                {pageNumbers.map((number, index) => (
                  <ContainerLabel key={index}>
                    <PaginationButton key={number} onClick={() => paginate(number)}>
                      <PaginationNumber>{number}</PaginationNumber>
                    </PaginationButton>
                    <Label
                      style={{
                        color: currentPage === number ? '#F2C94C' : "white",
                        fontWeight: currentPage === number ? 'bold' : 'normal',
                      }}
                    >—</Label>
                  </ContainerLabel>
                ))}
                <PaginationButton>
                  <PaginationArrowRight onClick={handleNextPage}>{`>`}</PaginationArrowRight>
                </PaginationButton>
              </PaginationContainer>
            )}
        </WrapperPagination>
        <WrapperFilter>
          <FilterContainer>
            <Filter>Health Score</Filter>
            <Select onChange={(e) => handleHealthScore(e.target.value)}>
              <Option value="all">Select</Option>
              <Option value="highest">Highest</Option>
              <Option value="lowest">Lowest</Option>
            </Select>
          </FilterContainer>
          <FilterContainer>
            <Filter>Sort</Filter>
            <Select onChange={(e) => handleSort(e.target.value)}>
              <Option value="all">Select</Option>
              <Option value="desc">A-Z</Option>
              <Option value="asc">Z-A</Option>
            </Select>
          </FilterContainer>
        </WrapperFilter>
      </MainWrapper>
      <RecipesContainer>
        {actualRecipes !== undefined && actualRecipes && (actualRecipes as any).map((recipe: any, index: any) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </RecipesContainer>
    </Container>
  )
}

export default Recipes