import React from "react";
import Styled from "styled-components";
import {DCharts} from "./DCharts";
import {LCharts} from "./LCharts";

export const MidContainer = ({history}) => {
    return (
        <Container> 
            <LCharts Title = "Amount Spent Overtime" history = {history}/>
            <DCharts Title = "Top Product Categories" history = {history}/>

        </Container>
    );
  };

const Container = Styled.div`{
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-gap: 3rem;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
        margin: 1rem 1rem;
        
    }
  }
`; 
