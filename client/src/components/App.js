import React from "react";
import Styled from "styled-components";
import LogoComponent from "./LogoComponent";
import Login from "./Login";
import Footer from "./Footer";

const App = () => {
  return (
    <Container> 
          <LogoComponent/>
          <Login/>
    <Footer/>
  </Container>
  );
};

const Container = Styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;

  @media screen  and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

`;



export default App;




