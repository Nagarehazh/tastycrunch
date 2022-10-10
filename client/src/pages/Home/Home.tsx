import {
    NavBar,
    Recipes
} from '../../components'
import { useGetAllRecipesQuery as getAll } from '../../redux/serverCall'
import datajson from '../../constants/data_save.json'
import { useSelector } from 'react-redux'
import { setDiet } from '../../redux/dietRedux'


const Home = () => {
  const {data, isLoading, error} = getAll()
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