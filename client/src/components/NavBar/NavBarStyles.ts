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

const AppBarDrawer = styled.div`
    display: flex;
    position: fixed;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 218px;
    height: 100%;
    background-color: #fff;
    color: #000;
    font-size: 1.5rem;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 100;
    animation: slideIn 0.5s ease-in-out;
    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
    &::-webkit-scrollbar {
      width: 10px;
      background-color: #cd97fc;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b55cfb;
      border-radius: 10px;
    }

   `;

const AppBar = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 218px;
    height: 100%;
    background-color: #fff;
    color: #000;
    font-size: 1.5rem;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 10px;
      background-color: #cd97fc;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b55cfb;
      border-radius: 10px;
    }

    @media ${({ theme }) => theme.breakpoints.md} {
      display: none;
  }
`;

const ToolBar = styled.nav`
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: space-between;
    width: 100%;
    height: 150%;
    background-color: #21034f;
    color: #000;
    font-size: 1.5rem;
`;

const CreateContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 85%;
padding: 20px;
background-color: #21034f;
color: white;


font-size: 1.6rem;

    h2 {
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 1px;
    }

`;

const CreateIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: white;
    background-size: 50%;
    color: black;
    border-radius: 50%;
    margin-right: 10px;
    font-size: 2.5rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
    }
`;


const DietContainer = styled.div`
    display: flex;
    flex-direction: column;
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
        margin-bottom: 20px;
    }
`;

const Hr = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #000;
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
    background-color: transparent;
    border: none;
    color: white;
    width: 100%;
    gap: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 20px;
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }

    h3 {
      font-size: 1.4rem;
    }

      
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

const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 80px;
    background-color: white;
    color: white;
    padding: 20px;
    font-size: 1.6rem;
`


const SeacrhButton = styled.button`
        margin-left: 10px;
        margin-bottom: 5px;
        background-color: white;
        border: none;
`

const Search = styled.input`
width: 100%;
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
margin-left: 228px;
@media ${({ theme }) => theme.breakpoints.md} {
    margin-left: 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 2rem;
    margin-left: 0.5rem;
  }

`;

const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
    h1 {
        font-size: 4.2rem;
        font-weight: 800;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.8rem;
        margin-bottom: 20px;
    }

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.6rem;
    background-color: transparent;
    color: white;
    ::placeholder {
        color: #D3D5D6;
    }
`;

const ButtonModal = styled.button`
margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #21034F;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #21034F;
        color: white;
        transform: scale(1.1);
    }
`;

const SelectType = styled.select`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.6rem;
    color: white;
    background-color: transparent;
    &::-webkit-scrollbar {
        width: 10px;
        background-color: #B55CFB;
      }
  
      &::-webkit-scrollbar-thumb {
        background-color: #21034F;
        border-radius: 10px;
      }
`;

const OptionType = styled.option`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.6rem;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 120px;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.6rem;
`;

const MenuButton = styled.button`
    display: none;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.6rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
        background-color: trasparent;
    }
    
    @media ${({ theme }) => theme.breakpoints.md} {
        display: flex;
`;

const MenuIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }
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
  SeacrhButton,
  CreateContainer,
  CreateIcon,
  ContainerModal,
  Form,
  Input,
  ButtonModal,
  SelectType,
  OptionType,
  TextArea,
  SearchForm,
  MenuButton,
  MenuIcon,
  AppBarDrawer
  
  
};


