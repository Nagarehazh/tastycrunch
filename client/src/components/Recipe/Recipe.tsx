import React from 'react'

import {
  CardDetailConatainer,
  CardDetailImage,
  CardDetailContent,
  CardDetailTitle,
  CardDetailDescription

} from './RecipeStyles'

interface RecipeProps {
  recipe: {
    id: number,
    name: string,
    description: string,
    image: string,
    diets: string[],
    stepByStep: string,

  }
}


const Recipe = (props: RecipeProps) => {
  const { recipe } = props

  return (
    <CardDetailConatainer>
      <CardDetailImage src={recipe.image} />
      <CardDetailContent>
        <CardDetailTitle>{recipe.name}</CardDetailTitle>
        <CardDetailDescription>{recipe.description}</CardDetailDescription>
      </CardDetailContent>
    </CardDetailConatainer>
  )
}

export default Recipe
