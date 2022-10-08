import styled from "styled-components";

const NavBarContainer = styled.div`
    display: flex;
    
`;

const NavBarLogo = styled.div`
display: flex;
justify-content: center;
align-items:center;
width: 100%;
height: 150px;
padding:0;
margin: auto;
background: ##121212;

svg {
    width: 100%;
    height:100%;
    
    circle {
        fill: #fff;
        animation: flame 2s ease-out infinite;
      }
      #ci2 {
        animation-delay: -.5s;
      }
      #ci3 {
        animation-delay: -1s;
      }
      #ci4 {
        animation-delay: -1.5s;
      }
      
      @keyframes flame {
        from {
          r:1px;
          opacity:.8;
        }
        to {
          r:28px;
          opacity:0;
        }
      }
  }
`;


const AppBar = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 240px;
    height: 100%;
    background-color: #fff;
    color: #000;
    font-size: 1.5rem;
`;

const ToolBar = styled.nav`
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: #21034f;
    color: #000;
    font-size: 1.5rem;
`;

const DietContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 85%;
    background-color: #21034f;
    color: white;
    padding: 20px;
    font-size: 1.6rem;
    
    h2 {
        font-size: 1.4rem;
        font-weight: bold;
        letter-spacing: 1px;
    }
`;

const Hr = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #000;
`;

const DietIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
`;

const IconWithName = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    `;

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

const SeacrhButton = styled.button`
        margin-left: 10px;
        margin-bottom: 5px;
        background-color: white;
        border: none;
`

const Search = styled.input`
width: 200px;
border: none;
border-bottom: 1px solid black;
padding: 10px;
font-size: 1.6rem;
background-color: white;
color: #21034F;
font-weight: bold;
letter-spacing: 1px;
margin-bottom: 10px;
    &:focus {
  outline: none;
}
`;

const TitleApp = styled.h1`
font-size: 2.5rem;
font-weight: bold;
letter-spacing: 1px;
color: #21034F;
margin-left: 260px;
`;



export {
  NavBarContainer,
  NavBarLogo,
  AppBar,
  ToolBar,
  Hr,
  DietContainer,
  DietIcon,
  IconWithName,
  HorizontalNav,
  Search,
  TitleApp,
  SeacrhButton
}

