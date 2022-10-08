import React from 'react'
import { RECIPES_ARRAY } from '../../constants/dietTypes'
import { Recipe } from '..'

import {
    RecipesContainer
} from './RecipesStyles'

const Recipes = () => {
  return (
    <RecipesContainer>
        {RECIPES_ARRAY.map((recipe, index) => (
            <Recipe key={index} recipe={recipe} />
        ))}
    </RecipesContainer>

  )
}

export default Recipes