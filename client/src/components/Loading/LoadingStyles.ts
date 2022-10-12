import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Wrapper = styled.div`
    display: flex;
    margin:auto;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 70%;
`

const LoadingAnimation = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #21034F;
    border-bottom: 16px solid #B55CFB;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  
  
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
    `;

export {
    LoadingAnimation,
    Container,
    Wrapper
}