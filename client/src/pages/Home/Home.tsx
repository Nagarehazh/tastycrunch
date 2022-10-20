import React from 'react';
import {
  NavBar,
  Recipes,
  Loading
} from '../../components'
import { setSearch } from '../../redux/searchRedux'
import { useGetAllRecipesQuery} from '../../redux/serverCall'
import { useSelector } from 'react-redux'
import { setDiet } from '../../redux/dietRedux'


const Home = () => {
  let { payload: payloadSearch } = useSelector(setSearch)
  const { data: dataGet, isLoading, error } = useGetAllRecipesQuery(payloadSearch.search.search,)
  let { payload } = useSelector(setDiet)
  const [data, setData] = React.useState(dataGet)
  
  
// console.log(payloadSearch.search.search !== '')
  
  
  React.useEffect(() => {
    setData(dataGet)
  }, [dataGet, payloadSearch, setData])
  
  if (isLoading) return <Loading />

  if (error) return <div>{(error as any).message}</div>



  return (
    <div>
      <NavBar />
      {/* {data && <Recipes recipes={data} dietclasification={payload}/>} */}
      {data && <Recipes 
                  recipes={data} 
                  dietclasification={payload} 
                  />}
    </div>
  )
}

export default Home