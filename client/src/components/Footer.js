import React from "react";
import Styled from "styled-components";
import {SiteData} from "./SiteData";

const Footer = ({mdisplay, grid}) => {
    return (
      <FooterContainer mdisplay = {mdisplay} grid = {grid} >
          <FooterFont> © {SiteData.company.name} </FooterFont>
          <FooterNote> {SiteData.company.description} </FooterNote>
      </FooterContainer>
    );
  };

const FooterContainer = Styled.div`
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  grid-area: ${props => props.grid};

  @media screen  and (min-width: 600px) {
    display: ${props => props.mdisplay};
}
  
`;

const FooterFont = Styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: #000000;
  margin-top: 1rem;
`;

const FooterNote = Styled.p`
  font-size: 0.8rem;
  color: #000000;
  margin-top: 1rem;  
`;




export default Footer;