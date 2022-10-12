import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;
    height: 100%;
    animation: fadeIn 1s;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @media ${({ theme }) => theme.breakpoints.md} {
        padding: 20px;
      }
`;



const RecipeContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    gap: 20px;
    @media ${({ theme }) => theme.breakpoints.md} {
        flex-direction: column;
      }
`;


const RecipeDetailImage = styled.img`
    flex: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const RecipeDetailContainer = styled.div`
flex: 2;
display: flex;
flex-direction: column;

height: 100%;
`;


const RecipeDetailTitle = styled.h2`
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
    color: #000;
`;

const RecipeDetailDescription = styled.p`
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    color: #000;
    margin: 20px 0;
    letter-spacing: 1px;
    line-height: 1.5;
    `;

const ContainerScoreDiet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const RecipeDetailHealthScore = styled.p`
    font-size: 1.8rem;
    text-align: center;
    width: 100%;
    font-weight: bold;
    color: #000;
    margin: 20px 0;
    `;

const DietIcon = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    
    
`;

const IconWithName = styled.button`
    display: flex;
    align-items: center;
    border: none;
    color: white;
    width: 100%;
    gap: 10px;
    border-radius: 10px;
    background-color: #21034F;
    justify-content: center;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    margin-bottom: 20px;

    h3 {
      font-size: 1.4rem;
     
    }

      
    `;

const DietContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
`;


const RecipeDetailStepByStep = styled.p`
font-size: 1.8rem;
font-weight: 400;
width: 100%;
height: 100%;
color: #000;
letter-spacing: 1px;
line-height: 1.5;

`;

const RecipesRecomendationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    

    
`;


const RecipesContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 20px;
    @media ${({ theme }) => theme.breakpoints.md} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        grid-template-columns: repeat(1, 1fr);
    }
    
`

const HorizontalNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: white;
    color: white;
    padding: 20px;
    font-size: 1.6rem;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        margin-bottom: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            transform: scale(1.1);
            transition: all 0.3s ease-in-out;
        }
    }
`;

const GoBackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    color: black;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }
`;

const TitleApp = styled.h1`
font-size: 2.5rem;
font-weight: bold;
letter-spacing: 1px;
color: #21034F;
margin-left: 228px;

`;

export {
    MainContainer,
    RecipeContainer,
    RecipesRecomendationContainer,
    RecipeDetailContainer,
    RecipeDetailImage,
    RecipeDetailTitle,
    RecipeDetailDescription,
    RecipeDetailHealthScore,
    RecipeDetailStepByStep,
    ContainerScoreDiet,
    DietContainer,
    IconWithName,
    DietIcon,
    RecipesContainer,
    HorizontalNav,
    TitleApp,
    GoBackButton
}



