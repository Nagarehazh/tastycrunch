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
  ContainerLabel
} from './RecipesStyles'
import { useSelector } from 'react-redux'
import { setSearch } from '../../redux/searchRedux'

interface RecipesProps {
  recipes: any
}


const Recipes = (props: RecipesProps) => {
  const { recipes } = props;

  const { payload } = useSelector(setSearch)
  const [filtered, setFiltered] = React.useState(recipes)
  const [sort, setSort] = React.useState('')
  const [healthScore, setHealthScore] = React.useState('')
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

  React.useEffect(() => {
    const currentRecipes = filtered && (filtered as any).slice(indexOfFirstRecipe, indexOfLastRecipe)
    setActualRecipes(currentRecipes)
    
  }, [currentPage, recipesPerPage, filtered, indexOfFirstRecipe, indexOfLastRecipe])

  React.useEffect(() => {
    if ((payload.search.search !== undefined && payload.search.search !== null) && (payload.search.search !== '')) {
      const filterArray = recipes && (recipes as any).filter((recipe: { name: string }) => recipe.name.toLocaleLowerCase().includes(payload.search.search.toLocaleLowerCase()))
      setFiltered(filterArray)
    }

  }, [payload])

  React.useEffect(() => {
    if (sort === 'desc') {
      recipes && (recipes as any).sort((a: { name: number }, b: { name: number }) => (a.name > b.name) ? 1 : -1)
      setCurrentPage(1)
      return setActualRecipes(recipes)
    }

    if (sort === 'asc') {
      recipes && (recipes as any).sort((a: { name: number }, b: { name: number }) => (a.name > b.name) ? -1 : 1)
      setCurrentPage(1)
      return setActualRecipes(recipes)
    }
  
  }, [sort, recipes])



  React.useEffect(() => {
    if (healthScore === 'highest') {
      recipes && (recipes as any).sort((a: { healthScore: number }, b: { healthScore: number }) => (a.healthScore > b.healthScore) ? -1 : 1)
      setCurrentPage(1)
      return setActualRecipes(recipes)
    }
    if (healthScore === 'lowest') {
      recipes && (recipes as any).sort((a: { healthScore: number }, b: { healthScore: number }) => (a.healthScore > b.healthScore) ? 1 : -1)
      setCurrentPage(1)
      return setActualRecipes(recipes)
    }
  
  }, [healthScore, recipes])


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
              <Option value="all">Select</Option>
              <Option value="highest">Highest</Option>
              <Option value="lowest">Lowest</Option>
            </Select>
          </FilterContainer>
          <FilterContainer>
            <Filter>Sort</Filter>
            <Select onChange={(e) => setSort(e.target.value)}>
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