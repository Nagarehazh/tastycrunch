import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 228px;
    @media ${({ theme }) => theme.breakpoints.md} {
        margin-left: 0;
        }
    `;

const MainWrapper = styled.div`
    display: flex;
    width: 100%;
    padding-left: 30px;

    @media ${({ theme }) => theme.breakpoints.lg} {
        flex-direction: column;
    }
    `

const WrapperPagination = styled.div`
    display: flex;
    margin: 1rem 0;
    margin-top: 2rem;
    @media ${({ theme }) => theme.breakpoints.sm} {
        margin: 0;
    }

    `;

const PaginationContainer = styled.div`
    display: flex;
    margin: 2rem 0.5rem 0 0;
    gap: 0.5rem;
    @media ${({ theme }) => theme.breakpoints.sm} {
        gap: 0.1rem;
    }
    
    `;

const PaginationButton = styled.button`
    display: flex;
    padding: 1.2rem;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 5px;
    background-color: #21034F;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #21034F;
        color: white;
        transform: scale(1.1);
    }
    
   
    `;

const PaginationNumber = styled.span`
    display: flex;
    margin: 0 0.5rem;
    padding: 1.2rem;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 5px;
    background-color: #21034F;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #f76402;
        color: white;
        transform: scale(1.1);
    }

 
    `;


const PaginationArrowLeft = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 5px;
    background-color: #21034F;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    padding: 1.2rem;
    &:hover {
        transform: scale(1.1);
    }

    `;

const PaginationArrowRight = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 5px;
    background-color: #21034F;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 1.2rem;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
    `;




const WrapperFilter = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2rem 3rem 0 0;
    align-items: center;
    width: 100%;
    `;


const FilterContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Filter = styled.div`
    margin-right: 1rem;
    display: flex;
    align-items: center;
`;

const Select = styled.select`
    padding: 0.5rem;
    margin-right: 1rem;
`;

const Option = styled.option``;



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

const ContainerLabel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const Label = styled.label`
    font-weight: bold;
    font-size: 4rem;
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
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #21034F;
        color: white;
        transform: scale(1.1);
    }
    `;


export {
    RecipesContainer,
    Container,
    WrapperFilter,
    FilterContainer,
    Filter,
    Select,
    Option,
    WrapperPagination,
    PaginationContainer,
    PaginationButton,
    PaginationNumber,
    PaginationArrowLeft,
    PaginationArrowRight,
    MainWrapper,
    Label,
    ContainerLabel,
    ButtonViewAll

}