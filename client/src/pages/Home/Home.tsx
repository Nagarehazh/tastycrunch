import React from 'react';
import {
  NavBar,
  Recipes,
  Loading
} from '../../components'
import { setSearch } from '../../redux/searchRedux'
import { useGetAllRecipesQuery} from '../../redux/serverCall'
import { useSelector, useDispatch } from 'react-redux'
import { setDiet } from '../../redux/dietRedux'
import {
  RecipeNotFound,
  RecipeNotFoundText,
  ButtonViewAll
} from './HomeStyles'


const Home = () => {
  const dispatch = useDispatch()
  let { payload: payloadSearch } = useSelector(setSearch)
  const { data: dataGet, isLoading, error } = useGetAllRecipesQuery(payloadSearch.search.search,)
  let { payload } = useSelector(setDiet)
  const [data, setData] = React.useState(dataGet)
  
  const handleViewAll = () => {
    dispatch(setSearch(""))
  }

  React.useEffect(() => {
    setData(dataGet)
  }, [dataGet, payloadSearch, setData])
  
  if (isLoading) return <Loading />

  if (error) return <div>{(error as any).message}</div>

  if(data === "Recipe with that name not found"){
    return (
      <RecipeNotFound>
        <NavBar />
        <RecipeNotFoundText>Recipe not found, try again or create your own recipe!</RecipeNotFoundText>
        <ButtonViewAll onClick={handleViewAll}>View all recipes</ButtonViewAll>
      </RecipeNotFound>
    )
  }

 return (
    <div>
      <NavBar />
      {data && <Recipes 
                  recipes={data} 
                  dietclasification={payload} 
                  />}
    </div>
  )
}

export default Home