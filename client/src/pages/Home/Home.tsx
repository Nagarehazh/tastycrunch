import {
    NavBar,
    Recipes
} from '../../components'
// import { useGetAllRecipesQuery as getAll } from '../../redux/serverCall'
import datajson from '../../constants/data_save.json'
import { useSelector } from 'react-redux'
import { setDiet } from '../../redux/dietRedux'
import { setOwnRecipes } from '../../redux/ownrecipesRedux'

const Home = () => {
  let { payload } = useSelector(setDiet)
  let { payload: payloadOwnRecipes } = useSelector(setOwnRecipes)
  // const {data, isLoading, error} = getAll()

  // if (isLoading) return <div>Loading...</div>
  
      

  return (
    <div>
        <NavBar/>
        {/* {data && <Recipes recipes={data}/>} */}
        <Recipes recipes={datajson} dietclasification={payload} myrecipes={payloadOwnRecipes}/>
    </div>
  )
}

export default Home