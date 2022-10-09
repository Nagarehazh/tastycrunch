import {
    NavBar,
    Recipes
} from '../../components'
import { useGetAllRecipesQuery as getAll } from '../../redux/serverCall'
import { RECIPES_ARRAY } from '../../constants/dietTypes'
import datajson from '../../constants/data_save.json'

const Home = () => {
  // const {data, isLoading, error} = getAll()

  // if (isLoading) return <div>Loading...</div>
  

  return (
    <div>
        <NavBar/>
        {/* {data && <Recipes recipes={data}/>} */}
        <Recipes recipes={datajson}/>
    </div>
  )
}

export default Home