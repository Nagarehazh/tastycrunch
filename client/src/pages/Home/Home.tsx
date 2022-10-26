import React from 'react';
import {
  NavBar,
  Recipes,
  Loading
} from '../../components'
import { setSearch } from '../../redux/searchRedux'
import { setDiet } from '../../redux/dietRedux'
import { setHealthScore } from '../../redux/healthScoreRedux';
import { setSort } from '../../redux/sortRedux';
import { useGetAllRecipesQuery } from '../../redux/serverCall'
import { useSelector, useDispatch } from 'react-redux'
import {
  RecipeNotFound,
  RecipeNotFoundText,
  ButtonViewAll
} from './HomeStyles'


const Home = () => {
  const dispatch = useDispatch()
  let { payload: payloadSearch } = useSelector(setSearch)
  const { data, isLoading, error } = useGetAllRecipesQuery(payloadSearch.search.search,)
  const recipeFromRedux = data !== undefined && data.map((recipe: any) => recipe)

  let { payload: payloadDiet } = useSelector(setDiet)
  let { payload: payloadHealthScore } = useSelector(setHealthScore)
  let { payload: payloadSort } = useSelector(setSort)
  const [dataToSend, setDataToSend] = React.useState(recipeFromRedux)

  const handleViewAll = () => {
    dispatch(setSearch(""))
  }

  React.useEffect(() => {
    setDataToSend(recipeFromRedux)
  }, [data, payloadSearch])

  React.useEffect(() => {
    if (payloadDiet.diet.diets !== " ") {
      setDataToSend(recipeFromRedux && recipeFromRedux.filter((recipe: any) => recipe.diets.includes(payloadDiet.diet.diets)))
      if (payloadHealthScore.healthScore.healthScore === "highest" && payloadSort.sort.sort === "desc") {
        setDataToSend(recipeFromRedux && recipeFromRedux.filter((recipe: any) => recipe.diets.includes(payloadDiet.diet.diets)).sort((a: any, b: any) => a.name.localeCompare(b.name)).sort((a: any, b: any) => b.healthScore - a.healthScore))
      } else if (payloadHealthScore.healthScore.healthScore === "highest" && payloadSort.sort.sort === "asc") {
        setDataToSend(recipeFromRedux && recipeFromRedux.filter((recipe: any) => recipe.diets.includes(payloadDiet.diet.diets)).sort((a: any, b: any) => b.name.localeCompare(a.name)).sort((a: any, b: any) => b.healthScore - a.healthScore))
      }
      else if (payloadHealthScore.healthScore.healthScore === "lowest" && payloadSort.sort.sort === "desc") {
        setDataToSend(recipeFromRedux && recipeFromRedux.filter((recipe: any) => recipe.diets.includes(payloadDiet.diet.diets)).sort((a: any, b: any) => a.name.localeCompare(b.name)).sort((a: any, b: any) => a.healthScore - b.healthScore))
      } else if (payloadHealthScore.healthScore.healthScore === "lowest" && payloadSort.sort.sort === "asc") {
        setDataToSend(recipeFromRedux && recipeFromRedux.filter((recipe: any) => recipe.diets.includes(payloadDiet.diet.diets)).sort((a: any, b: any) => b.name.localeCompare(a.name)).sort((a: any, b: any) => a.healthScore - b.healthScore))
      }

      else if (payloadHealthScore.healthScore.healthScore === "highest" && payloadSort.sort.sort === " ") {
        setDataToSend(recipeFromRedux && recipeFromRedux.filter((recipe: any) => recipe.diets.includes(payloadDiet.diet.diets)).sort((a: any, b: any) => b.healthScore - a.healthScore))
      } else if (payloadHealthScore.healthScore.healthScore === "lowest" && payloadSort.sort.sort === " ") {
        setDataToSend(recipeFromRedux && recipeFromRedux.filter((recipe: any) => recipe.diets.includes(payloadDiet.diet.diets)).sort((a: any, b: any) => a.healthScore - b.healthScore))
      }
      else if (payloadHealthScore.healthScore.healthScore === " " && payloadSort.sort.sort === "desc") {
        setDataToSend(recipeFromRedux && recipeFromRedux.filter((recipe: any) => recipe.diets.includes(payloadDiet.diet.diets)).sort((a: any, b: any) => a.name.localeCompare(b.name)))
      } else if (payloadHealthScore.healthScore.healthScore === " " && payloadSort.sort.sort === "asc") {
        setDataToSend(recipeFromRedux && recipeFromRedux.filter((recipe: any) => recipe.diets.includes(payloadDiet.diet.diets)).sort((a: any, b: any) => b.name.localeCompare(a.name)))
      }
    } else {
      if (payloadHealthScore.healthScore.healthScore !== " " || payloadSort.sort.sort !== " ") {
        if (payloadHealthScore.healthScore.healthScore === "highest" && payloadSort.sort.sort === " ") {
          setDataToSend(recipeFromRedux && recipeFromRedux.sort((a: any, b: any) => b.healthScore - a.healthScore))
        } else if (payloadHealthScore.healthScore.healthScore === "lowest" && payloadSort.sort.sort === " ") {
          setDataToSend(recipeFromRedux && recipeFromRedux.sort((a: any, b: any) => a.healthScore - b.healthScore))
        }

        else if (payloadHealthScore.healthScore.healthScore === " " && payloadSort.sort.sort === "desc") {
          setDataToSend(recipeFromRedux && recipeFromRedux.sort((a: any, b: any) => a.name.localeCompare(b.name)))
        } else if (payloadHealthScore.healthScore.healthScore === " " && payloadSort.sort.sort === "asc") {
          setDataToSend(recipeFromRedux && recipeFromRedux.sort((a: any, b: any) => b.name.localeCompare(a.name)))
        }

        else if (payloadHealthScore.healthScore.healthScore === "highest" && payloadSort.sort.sort === "desc") {
          setDataToSend(recipeFromRedux && (recipeFromRedux.sort((a: any, b: any) => a.name.localeCompare(b.name)).sort((a: any, b: any) => b.healthScore - a.healthScore)))
        } else if (payloadHealthScore.healthScore.healthScore === "highest" && payloadSort.sort.sort === "asc") {
          setDataToSend(recipeFromRedux && recipeFromRedux.sort((a: any, b: any) => b.name.localeCompare(a.name)).sort((a: any, b: any) => b.healthScore - a.healthScore))
        }
        else if (payloadHealthScore.healthScore.healthScore === "lowest" && payloadSort.sort.sort === "desc") {
          setDataToSend(recipeFromRedux && recipeFromRedux.sort((a: any, b: any) => a.name.localeCompare(b.name)).sort((a: any, b: any) => a.healthScore - b.healthScore))
        } else if (payloadHealthScore.healthScore.healthScore === "lowest" && payloadSort.sort.sort === "asc") {
          setDataToSend(recipeFromRedux && recipeFromRedux.sort((a: any, b: any) => b.name.localeCompare(a.name)).sort((a: any, b: any) => a.healthScore - b.healthScore))
        }
      }
    }
  }, [payloadHealthScore.healthScore.healthScore, payloadSort.sort.sort, payloadDiet.diet.diets])


  if (isLoading) return <Loading />

  if (error) return <div>{(error as any).message}</div>

  if (data === "Recipe with that name not found") {
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
        recipes={dataToSend}
        dietclasification={payloadDiet}
      />}
    </div>
  )
}

export default Home