import React from 'react'
import { Recipe } from '..'
import { Link } from 'react-router-dom'
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
  ButtonViewAll,
  
} from './RecipesStyles'
import { useSelector } from 'react-redux'
import { setSearch } from '../../redux/searchRedux'
import { useDispatch } from 'react-redux'

interface RecipesProps {
  recipes: any
  dietclasification: any
}


const Recipes = (props: RecipesProps) => {
  const { recipes, dietclasification } = props;
  const dispatch = useDispatch()
  
  
  const recipesFromRedux = [...recipes]

  const [dietType, setDietType] = React.useState(false)
  const [searchMode, setSearchMode] = React.useState(false)

  let { payload } = useSelector(setSearch)

  const [dietPayload, setDietPayload] = React.useState([])

  const [filtered, setFiltered] = React.useState(recipesFromRedux)
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
    setDietType(false)
    setSearchMode(false)
    setCurrentPage(1)
    setFiltered(recipesFromRedux)
  }


  const handleSort = (e: any) => {
    setSort(e)
    if (e === 'desc') {
      setCurrentPage(1)

      if (dietType === true && searchMode === false) {
        
        setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => a.name.localeCompare(b.name)))

      } else if (searchMode === true && dietType === false) {
        setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => a.name.localeCompare(b.name)))

      } else {

        setActualRecipes(filtered && (filtered as any).sort((a: any, b: any) => a.name.localeCompare(b.name)).slice(indexOfFirstRecipe, indexOfLastRecipe))
      }

    } else if (e === 'asc') {

      if (dietType === true && searchMode === false) {
        console.log("aquí hay", filtered)
        setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => b.name.localeCompare(a.name)))

      } else if (searchMode === true && dietType === false) {
        setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => b.name.localeCompare(a.name)))

      } else {
        setCurrentPage(1)

        setActualRecipes(filtered && (filtered as any).sort((a: any, b: any) => b.name.localeCompare(a.name)).slice(indexOfFirstRecipe, indexOfLastRecipe))
      }

    }
  }

  const handleHealthScore = (e: any) => {
    setHealthScore(e)
    if (e === 'highest') {
      setCurrentPage(1)

      if (dietType === true && searchMode === false) {
        setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => b.healthScore - a.healthScore))

      } else if (searchMode === true && dietType === false) {
        setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => b.healthScore - a.healthScore))

      } else {

        setActualRecipes(filtered && (filtered as any).sort((a: any, b: any) => b.healthScore - a.healthScore).slice(indexOfFirstRecipe, indexOfLastRecipe))
      }

    } else if (e === 'lowest') {
      setCurrentPage(1)

      if (dietType === true && searchMode === false) {
        setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => a.healthScore - b.healthScore))

      } else if (searchMode === true && dietType === false) {
        setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => a.healthScore - b.healthScore))

      } else {
        setActualRecipes(filtered && (filtered as any).sort((a: any, b: any) => a.healthScore - b.healthScore).slice(indexOfFirstRecipe, indexOfLastRecipe))

      }
    }
  }


  React.useEffect(() => {
    const currentRecipes = filtered && (filtered as any).slice(indexOfFirstRecipe, indexOfLastRecipe)
    setActualRecipes(currentRecipes)

  }, [currentPage, recipesPerPage, filtered, indexOfFirstRecipe, indexOfLastRecipe])


  React.useEffect(() => {
    if ((payload.search.search !== undefined && payload.search.search !== null) && (payload.search.search !== '')) {

      const filterArray = recipes !== undefined && (recipes as any).filter((recipe: { name: string }) => recipe.name.toLocaleLowerCase().includes(payload.search.search.toLocaleLowerCase()))
      setSearchMode(true)
      setCurrentPage(1)
      setActualRecipes(filterArray)
      return setFiltered(filterArray)
    }

  }, [payload])


  React.useEffect(() => {
    if (dietclasification.diet.diets !== undefined && dietclasification.diet.diets !== null && dietclasification.diet.diets !== ' ') {
      if (dietPayload.length === 0) {
        setDietPayload(dietclasification)
        setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)))
        setDietType(true)
        if(searchMode === false){
        dispatch(setSearch(""))
        }
        setDietPayload([])
      }

    }
  }, [dietclasification])




  return (
    <Container>
      <MainWrapper>
        <WrapperPagination>
          {!!dietType || !!searchMode
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
          <Link to={`/recipe/${recipe.id}`} key={index}>
            <Recipe recipe={recipe} />
          </Link>
        ))}
      </RecipesContainer>
    </Container>
  )
}

export default Recipes