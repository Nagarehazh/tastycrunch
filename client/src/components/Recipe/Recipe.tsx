import defaultImg from '../../assets/images/defaultImage.jpg'
import {
  CardDetailConatainer,
  CardDetailImage,
  CardDetailContent,
  CardDetailTitle,
  CardDietTags,
  CardDetailImgTagsContainer,
  Overlay,
  CardDetailHealthScore
} from './RecipeStyles'

interface RecipeProps {
  recipe: {
    id: number;
    name: string;
    healthScore: number;
    image: string;
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
          <Overlay>
            <CardDetailImage src={recipe.image || defaultImg} alt={recipe.name} />
            <CardDietTags>
              {recipe.diets && (recipe.diets as any).map((diet: any, index: any) => (
                <span key={index}>{diet}</span>
              ))}
            </CardDietTags>
          </Overlay>
        )}
      </CardDetailImgTagsContainer>
      <CardDetailContent>
        <CardDetailTitle>{recipe.name}</CardDetailTitle>
        <CardDetailHealthScore>Health Score: {recipe.healthScore}</CardDetailHealthScore>
      </CardDetailContent>
    </CardDetailConatainer>
  )
}

export default Recipe
