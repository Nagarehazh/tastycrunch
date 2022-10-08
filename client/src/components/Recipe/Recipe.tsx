import React from 'react'

import {
  CardDetailConatainer,
  CardDetailImage,
  CardDetailContent,
  CardDetailTitle,
  CardDetailDescription,
  CardDietTags,
  CardDetailImgTagsContainer
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
      <CardDetailImgTagsContainer>
      <CardDetailImage src={recipe.image} />
      {recipe.diets && recipe.diets.length > 0 && (
        <CardDietTags>
          {recipe.diets.map((diet) => (
            <span key={diet}>{diet}</span>
          ))}
        </CardDietTags>
      )}
      </CardDetailImgTagsContainer>
      <CardDetailContent>
        <CardDetailTitle>{recipe.name}</CardDetailTitle>
        <CardDetailDescription>{recipe.description}</CardDetailDescription>
      </CardDetailContent>
    </CardDetailConatainer>
  )
}

export default Recipe
