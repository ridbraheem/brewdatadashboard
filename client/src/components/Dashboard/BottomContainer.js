import React from "react";
import Styled from "styled-components";
import {HCharts} from "./HCharts";
import {BCharts} from "./BCharts";

export const BottomContainer = ({history}) => {
    return (
        <Container> 
            <BCharts Title = "Products" history = {history}/>
            <HCharts Title = "Favorite Colors" history = {history}/>

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