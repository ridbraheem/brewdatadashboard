import React from "react";
import Styled from "styled-components";

export const KPICards = ({Title, KPI}) => {
    return (
        <Container>
            <TitleContainer Title = {Title}> {Title} </TitleContainer>
             <KPIContainer KPI = {KPI} > {KPI} </KPIContainer>
        </Container>        
    );
};


export const Container = Styled.div`{
    background: rgba(154, 155, 156, 0.2);
    border-radius: 20px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
        margin: 1rem 1rem;
        
    }
  }
`; 

export const TitleContainer = Styled.div`{
    margin: 1rem 2rem 0;
    text-transform: uppercase;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 600;
    color: #006B3F;


    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
        margin: 1rem 1rem auto;
        
    }
  }
`; 

const KPIContainer = Styled.div`{
    font-size: 1.2rem;
    font-weight: 600;
    color: #000000;
    margin: 0.5rem 2rem 0;
    text-align: left;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
        margin: 1rem 1rem;
        
    }
  }
`; 
