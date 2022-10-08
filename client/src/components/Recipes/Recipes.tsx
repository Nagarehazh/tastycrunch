import React from 'react'
import { RECIPES_ARRAY } from '../../constants/dietTypes'
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
  ContainerLabel
} from './RecipesStyles'
import { useSelector } from 'react-redux'
import { setSearch } from '../../redux/searchRedux'
// import { useGetAllRecipesQuery } from '../../redux/serverCall'



const Recipes = () => {
  // const { data: dataRecipes } = useGetAllRecipesQuery()
  //pagination
  const { payload } = useSelector(setSearch)
  const [filtered, setFiltered] = React.useState(RECIPES_ARRAY)
  const [sort, setSort] = React.useState('')
  const [healthScore, setHealthScore] = React.useState('')
  const [currentPage, setCurrentPage] = React.useState(1)
  const [recipesPerPage] = React.useState(9)
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = filtered.slice(indexOfFirstRecipe, indexOfLastRecipe)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(RECIPES_ARRAY.length / recipesPerPage); i++) {
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

  React.useEffect(() => {
    const filterArray = RECIPES_ARRAY.filter((recipe) => recipe.name.toLocaleLowerCase().includes(payload.search.search.toLocaleLowerCase()))

    setFiltered(filterArray)

  }, [payload])

  React.useEffect(() => {
    if (sort === 'az'){
    currentRecipes.sort((a, b) => (a.name > b.name) ? 1 : -1)
    setFiltered(currentRecipes)

  } else {
    currentRecipes.sort((a, b) => (a.name > b.name) ? -1 : 1)
    setFiltered(currentRecipes)
  }

  }, [sort])

React.useEffect(() => {
  if (healthScore === 'highest'){
  currentRecipes.sort((a, b) => (a.healthScore > b.healthScore) ? -1 : 1)
  setFiltered(currentRecipes)

} else {
  currentRecipes.sort((a, b) => (a.healthScore > b.healthScore) ? 1 : -1)
  setFiltered(currentRecipes)
}

}, [healthScore])



  return (
    <Container>
      <MainWrapper>
        <WrapperPagination>
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
        </WrapperPagination>
        <WrapperFilter>
          <FilterContainer>
            <Filter>Health Score</Filter>
            <Select onChange={(e) => setHealthScore(e.target.value)}>
              <Option value="">Select</Option>
              <Option value="highest">Highest</Option>
              <Option value="lowest">Lowest</Option>
            </Select>
          </FilterContainer>
          <FilterContainer>
            <Filter>Sort</Filter>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="">Select</Option>
              <Option value="az">A-Z</Option>
              <Option value="za">Z-A</Option>
            </Select>
          </FilterContainer>
        </WrapperFilter>
      </MainWrapper>
      <RecipesContainer>
        {currentRecipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </RecipesContainer>
    </Container>
  )
}

export default Recipes