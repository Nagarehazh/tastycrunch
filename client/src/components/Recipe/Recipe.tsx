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
    id: number;
    name: string;
    healthScore: number;
    image: string;
    // dishTypes: string[];
    description: string;
    diets: string[];

  }
}


const Recipe = (props: RecipeProps) => {
  const { recipe } = props

  return (
    <CardDetailConatainer>
      <CardDetailImgTagsContainer>
      {recipe.diets && recipe.diets.length > 0 && (
        <>
      <CardDetailImage src={recipe.image} />
        <CardDietTags>
          {recipe.diets.map((diet) => (
            <span key={diet}>{diet}</span>
          ))}
        </CardDietTags>
        </>
      )}
      </CardDetailImgTagsContainer>
      <CardDetailContent>
        <CardDetailTitle>{recipe.name}</CardDetailTitle>
        {/* <CardDetailDescription>{recipe.dishTypes}</CardDetailDescription> */}
        <CardDetailDescription>{recipe.description}</CardDetailDescription>
      </CardDetailContent>
    </CardDetailConatainer>
  )
}

export default Recipe
