import styled from "styled-components";

const CardDetailConatainer = styled.div`
    
   cursor: pointer;
   height: 100%;
   margin-bottom: 1rem;
  
   
   &:hover {
    transform: scale(1.05);
    
   }
   animation: animateCard 1s;
    @keyframes animateCard {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const CardDetailImgTagsContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    z-index: -1;
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: rgba(0, 0, 0, 0);

`;

const CardDetailImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px 7px 0 0;
    z-index: -1;
`;

const CardDietTags = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    margin: 0.5rem 0;
    top: 0;
    z-index: 1;
    left: 0;
    
    span {
        margin: 0 0.5rem;
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        background-color: #f76402;
        color: white;
        margin: 0.5rem;
        font-size: 1.8rem;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);

        @media ${({ theme }) => theme.breakpoints.lg} {
            font-size: 1.1rem;
        }
        @media ${({ theme }) => theme.breakpoints.md} {
            font-size: 1.8rem;
        }
    }
`;



const CardDetailContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0 0 7px 7px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        
    }
`;

const CardDetailTitle = styled.h3`
text-align: center;
    font-size: 1.6rem;
    margin-bottom: 1rem;
`;


const CardDetailHealthScore = styled.p`
    font-size: 1.2rem;
    text-align: center;
    color: black;
    overflow: hidden;
`;




export {
    CardDetailConatainer,
    CardDetailImage,
    CardDetailContent,
    CardDetailTitle,
    CardDietTags,
    CardDetailImgTagsContainer, 
    Overlay,
    CardDetailHealthScore
}
