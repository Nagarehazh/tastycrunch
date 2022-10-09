import {
    NavBar,
    Recipes
} from '../../components'
// import { useGetAllRecipesQuery as getAll } from '../../redux/serverCall'
import datajson from '../../constants/data_save.json'
import { useSelector } from 'react-redux'
import { setDiet } from '../../redux/dietRedux'

const Home = () => {
  let { payload } = useSelector(setDiet)
  // const {data, isLoading, error} = getAll()

  // if (isLoading) return <div>Loading...</div>
  
      

  return (
    <div>
        <NavBar/>
        {/* {data && <Recipes recipes={data}/>} */}
        <Recipes recipes={datajson} dietclasification={payload}/>
    </div>
  )
}

export default Home