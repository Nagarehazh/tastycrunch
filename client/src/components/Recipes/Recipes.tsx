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
  console.log(payload.search.search)
  const [filtered, setFiltered] = React.useState(RECIPES_ARRAY)
  const [sort, setSort] = React.useState('')
  const [currentPage, setCurrentPage] = React.useState(1)
  const [recipesPerPage] = React.useState(15)
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
    if (sort === 'Z-A') {
      RECIPES_ARRAY.sort((a, b) => a.name.charAt(0).localeCompare(b.name.charAt(0)))
    } else if (sort === 'A-Z') {
      RECIPES_ARRAY.sort((a, b) => b.name.charAt(0).localeCompare(a.name.charAt(0)))
    } else {
      RECIPES_ARRAY.sort((a, b) => a.name.charAt(0).localeCompare(b.name.charAt(0)))
    }
  }, [sort])

  React.useEffect(() => {
    const filterArray = RECIPES_ARRAY.filter((recipe) => recipe.name.toLocaleLowerCase().includes(payload.search.search.toLocaleLowerCase()))

    setFiltered(filterArray)

  }, [payload])

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
            <Filter>Sort</Filter>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="">Select</Option>
              <Option value="A-Z">A-Z</Option>
              <Option value="Z-A">Z-A</Option>
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