import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #21034F;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: trasparent;
    width: 80%;
    height: 80%;
`

const AbsoluteContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
`

const ContainerWelcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: trasparent;
    width: 80%;
    height: 80%;
`

const H1 = styled.h1`
    font-size: 8rem;
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
    background: linear-gradient(
		-225deg,
		#4d357f 0%,
		white 29%,
		white 67%,
		#4d357f 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

    @media ${({ theme }) => theme.breakpoints.sm} {
        font-size: 5rem;
    }
`
const P = styled.p`
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
    @media ${({ theme }) => theme.breakpoints.sm}  {
        font-size: 1.5rem;  
    }

`

const Button = styled.button`
    background-color: white;
    opacity: 0.8;
    margin-top: 1rem;
    color: #21034F;
    font-size: 2rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: black;
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        opacity: 1;
    }
`



export {
    Container,
    Wrapper,
    H1,
    ContainerWelcome,
    AbsoluteContainer,
    P,
    Button,
    
}