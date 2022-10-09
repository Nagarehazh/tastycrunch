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
    dishTypes: string[];
    description: string;
    diets: string[];

  }
}


const Recipe = (props: RecipeProps) => {
  const { recipe } = props;


 
  return (
    <CardDetailConatainer>
      <CardDetailImgTagsContainer>
        {recipe && (
          <>
            <CardDetailImage src={recipe.image} alt={recipe.name} />
            <CardDietTags>
              {recipe.diets && (recipe.diets as any).map((diet: any, index: any) => (
                <span key={index}>{diet}</span>
              ))}
            </CardDietTags>
          </>
        )}
      </CardDetailImgTagsContainer>
      <CardDetailContent>
        <CardDetailTitle>{recipe.name}</CardDetailTitle>
        {/* <CardDetailDescription>{recipe.dishTypes}</CardDetailDescription> */}
        <CardDetailDescription>{recipe.description}</CardDetailDescription>
        <CardDetailDescription>{recipe.healthScore}</CardDetailDescription>
      </CardDetailContent>
    </CardDetailConatainer>
  )
}

export default Recipe
