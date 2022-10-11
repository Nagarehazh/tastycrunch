import {
    NavBar,
    Recipes
} from '../../components'
import { setSearch } from '../../redux/searchRedux'
import { useGetAllRecipesQuery as getAll } from '../../redux/serverCall'
import { useSelector } from 'react-redux'
import { setDiet } from '../../redux/dietRedux'
// import datajson from '../../constants/data_save.json'


const Home = () => {
  let { payload: payloadSearch } = useSelector(setSearch)
  const {data, isLoading, error} = getAll(payloadSearch.search.search)
  let { payload } = useSelector(setDiet)
  
  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{(error as any).message}</div>
  
      

  return (
    <div>
        <NavBar/>
        {data && <Recipes recipes={data} dietclasification={payload} />}
        {/* <Recipes recipes={datajson} dietclasification={payload} /> */}
    </div>
  )
}

export default Home