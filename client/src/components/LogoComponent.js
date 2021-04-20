import React from "react";
import Styled from "styled-components";
import {SiteData} from "./SiteData";

export const LogoComponent = () => {
    return (
      <Container>
        <LogoFont> {SiteData.company.name} </LogoFont>
    </Container>
    );
  };

export const Container = Styled.div`
  background: rgba(154, 155, 156, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen  and (max-width: 600px) {
    background: #FFFFFF;
  }
`;


export const LogoFont = Styled.p`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 4rem;
  color: #006B3F;

  @media screen  and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
