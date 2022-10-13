import React from 'react';
import {
  NavBar,
  Recipes,
  Loading
} from '../../components'
import { setSearch } from '../../redux/searchRedux'
import { useGetAllRecipesQuery as getAll } from '../../redux/serverCall'
import { useSelector } from 'react-redux'
import { setDiet } from '../../redux/dietRedux'


const Home = () => {
  let { payload: payloadSearch } = useSelector(setSearch)
  const [searchPayload,] = React.useState(payloadSearch)
  const { data, isLoading, error } = getAll(searchPayload.search.search)
  let { payload } = useSelector(setDiet)

  if (isLoading) return <Loading />

  if (error) return <div>{(error as any).message}</div>

  return (
    <div>
      <NavBar />
      {data && <Recipes recipes={data} dietclasification={payload} />}
    </div>
  )
}

export default Home