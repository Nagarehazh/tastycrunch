import styled from "styled-components";

const CardDetailConatainer = styled.div`
    padding: 1rem;
   cursor: pointer;
   height: 300px;

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
`;


const CardDetailImage = styled.img`
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 7px 7px 0 0;
`;

const CardDietTags = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    margin: 0.5rem 0;
    top: 0;
    left: 0;

    span {
        margin: 0 0.5rem;
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        background-color: #f76402;
        color: white;
        margin: 0.5rem;
        font-size: 1.8rem;
    }
`;



const CardDetailContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
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
    font-size: 1.6rem;
    margin-bottom: 1rem;
`;

const CardDetailDescription = styled.p`
    font-size: 1.2rem;
    color: #777;
    overflow: hidden;
`;





export {
    CardDetailConatainer,
    CardDetailImage,
    CardDetailContent,
    CardDetailTitle,
    CardDetailDescription,
    CardDietTags,
    CardDetailImgTagsContainer
}
