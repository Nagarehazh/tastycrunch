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
import { setSearch } from '../../redux/searchRedux'
import { setDiet } from '../../redux/dietRedux'
import { useDispatch, useSelector } from 'react-redux'

interface RecipesProps {
  recipes: any
  dietclasification: any
}


const Recipes = (props: RecipesProps) => {
  const { recipes, dietclasification } = props;
  let recipesFromRedux = [...recipes]

  const dispatch = useDispatch()
  let { payload: payloadSearch } = useSelector(setSearch)

  const [dietType, setDietType] = React.useState(false)
  const [dietPayload, setDietPayload] = React.useState([])
  const [filtered, setFiltered] = React.useState(recipesFromRedux)
  const [sort, setSort] = React.useState('')
  const [healthScore, setHealthScore] = React.useState('')
  const [healthSelect, setHealthSelect] = React.useState("")
  const [sortSelect, setSortSelect] = React.useState("")

  const [currentPage, setCurrentPage] = React.useState(1)
  const [recipesPerPage] = React.useState(9)
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const [isSameSearch, setIsSameSearch] = React.useState("")
  const [actualRecipes, setActualRecipes] = React.useState(recipesFromRedux && (recipesFromRedux as any).slice(indexOfFirstRecipe, indexOfLastRecipe))

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
    setIsSameSearch("")
    dispatch(setSearch(""))
    setCurrentPage(1)
    setHealthSelect("")
    setSortSelect("")
    setFiltered(recipesFromRedux)
  }

  const handleSort = (e: any) => {
    setSort(e)
    setCurrentPage(1)
    if (dietType === false) {
      if (e === 'asc') {
        return setActualRecipes(filtered.sort((a: any, b: any) => b.name.localeCompare(a.name)))
      }

      if (e === 'desc') {
        return setActualRecipes(filtered.sort((a: any, b: any) => a.name.localeCompare(b.name)))
      }
    } else {
      if (e === 'asc') {
        return setActualRecipes(actualRecipes.sort((a: any, b: any) => b.name.localeCompare(a.name)))
      }

      if (e === 'desc') {
        return setActualRecipes(actualRecipes.sort((a: any, b: any) => a.name.localeCompare(b.name)))
      }
    }
  }

  const handleHealthScore = (e: any) => {
    setHealthScore(e)
    setCurrentPage(1)
    if (dietType === false) {
      if (e === 'highest') {
        return setActualRecipes(filtered.sort((a: any, b: any) => b.healthScore - a.healthScore))
      }

      if (e === 'lowest') {
        return setActualRecipes(filtered.sort((a: any, b: any) => a.healthScore - b.healthScore))
      }

    } else {
      if (e === 'highest') {
        return setActualRecipes(actualRecipes.sort((a: any, b: any) => b.healthScore - a.healthScore))
      }

      if (e === 'lowest') {
        return setActualRecipes(actualRecipes.sort((a: any, b: any) => a.healthScore - b.healthScore))
      }

    }
  }

  React.useEffect(() => {
    const currentRecipes = filtered && (filtered as any).slice(indexOfFirstRecipe, indexOfLastRecipe)
    setActualRecipes(currentRecipes)

  }, [currentPage, recipesPerPage, filtered, indexOfFirstRecipe, indexOfLastRecipe])

  React.useEffect(() => {
    if (dietclasification.diet.diets !== undefined && dietclasification.diet.diets !== null && dietclasification.diet.diets !== ' ') {
      if (dietPayload.length === 0) {
        setDietPayload(dietclasification)
        if (dietType === false) {
          setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)))

        } else {
          setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)))

          if (sort === 'asc') {
            setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => b.name.localeCompare(a.name)))
          } else if (sort === 'desc') {
            setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => a.name.localeCompare(b.name)))
          } else if (healthScore === 'highest') {
            setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => b.healthScore - a.healthScore))
          }
          else if (healthScore === 'lowest') {
            setActualRecipes(filtered && (filtered as any).filter((recipe: { diets: string[] }) => recipe.diets?.includes(dietclasification.diet.diets)).sort((a: any, b: any) => a.healthScore - b.healthScore))
          }
        }
        setDietType(true)
        dispatch(setDiet(" "))
        setDietPayload([])
      }
    }
  }, [dietclasification])

  React.useEffect(() => {
    if (payloadSearch.search.search !== '' && payloadSearch.search.search !== isSameSearch) {
      if (payloadSearch.search.search !== undefined && payloadSearch.search.search !== null && payloadSearch.search.search !== '') {
        setDietType(false)
        setFiltered(recipesFromRedux)
        setIsSameSearch(payloadSearch.search.search)
      } else {
        setIsSameSearch(payloadSearch.search.search)
      }
    }
    setFiltered(recipesFromRedux)
  }, [recipes])


  return (
    <Container>
      <MainWrapper>
        <WrapperPagination>
          {dietType === true
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
                    <PaginationButton onClick={() => paginate(number)}>
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
            <Select value={healthSelect} onChange={(e) => { handleHealthScore(e.target.value); setHealthSelect(e.target.value) }}>
              <Option value="all">Select</Option>
              <Option value="highest">Highest</Option>
              <Option value="lowest">Lowest</Option>
            </Select>
          </FilterContainer>
          <FilterContainer>
            <Filter>Sort</Filter>
            <Select value={sortSelect} onChange={(e) => { handleSort(e.target.value); setSortSelect(e.target.value) }}>
              <Option value="all">Select</Option>
              <Option value="desc">A-Z</Option>
              <Option value="asc">Z-A</Option>
            </Select>
          </FilterContainer>
        </WrapperFilter>
      </MainWrapper>
      <RecipesContainer>
        {actualRecipes !== undefined && actualRecipes && (actualRecipes as any).map((recipe: any, index: any) => (
          <Link to={`/recipes/${recipe.id}`} key={index}>
            <Recipe recipe={recipe} />
          </Link>
        ))}
      </RecipesContainer>
    </Container>
  )
}


export default Recipes