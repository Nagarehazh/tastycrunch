import styled from "styled-components";

const RecipeNotFound = styled.div`
`;

const RecipeNotFoundText = styled.h1`
    margin-left: 228px;
    @media ${({ theme }) => theme.breakpoints.md} {
        margin-left: 0;
        padding-left: 10px;
    }
`;

const ButtonViewAll = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 10rem;
height: 3rem;
border: none;
border-radius: 5px;
background-color: #21034F;
color: white;
font-size: 1.5rem;
font-weight: bold;
cursor: pointer;
margin-left: 228px;
padding: 3.5rem;
transition: all 0.2s ease-in-out;
&:hover {
    background-color: #21034F;
    color: white;
    transform: scale(1.1);
}
@media ${({ theme }) => theme.breakpoints.md} {
    margin-left: 20px;
    
}
`;


export {
    RecipeNotFound,
    RecipeNotFoundText,
    ButtonViewAll
}