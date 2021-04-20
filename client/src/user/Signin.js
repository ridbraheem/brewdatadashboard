import React from "react";
import Styled from "styled-components";
import {LogoComponent} from "../components/LogoComponent";
import Login from "../components/Login";
import Footer from "../components/Footer";

const Signin = () => {
    return (
      <Container>
          <LogoComponent/>
          <Login/>
        <Footer mdisplay="none" grid="auto"/>
      </Container>
    );
  };

const Container = Styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: none;


  @media screen  and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 10fr 5fr 5fr;
    grid-template-areas: none;

  }

`;


  export default Signin;