import React from "react";
import Styled from "styled-components";
import {LogoComponent} from "../components/LogoComponent";
import Register from "../components/Register";
import Footer from "../components/Footer";

const Signup = () => {
    return (
      <Container>
          <LogoComponent/>
          <Register/>
        <Footer mdisplay="none" grid="auto"/>
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

  export default Signup;