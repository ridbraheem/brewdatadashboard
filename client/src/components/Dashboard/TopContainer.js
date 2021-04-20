import React from "react";
import Styled from "styled-components";
import {KPICards} from "./Cards";
import {Metrics} from "./DashboardData";

export const TopContainer = ({history}) => {
    return (
        <Container> 
            <KPICards Title = {Metrics.AmountSpent.title} 
                        KPI = {new Intl.NumberFormat('en-US', 
                        {style: 'currency', currency: 'USD' })
                        .format(history.reduce((a,v) => 
                        a = a + v.salesamount , 0 ))
                        } />
            <KPICards Title = {Metrics.ProductsBought.title} KPI= {history.length}/>
            <KPICards Title = {Metrics.AmountSaved.title}
                        KPI = {new Intl.NumberFormat('en-US', 
                        {style: 'currency', currency: 'USD' })
                        .format(history.reduce((a,v) => 
                         a = a + v.taxamount , 0 ))
                         } /> 
            <KPICards Title = {Metrics.FreightsPaid.title}
                        KPI = {new Intl.NumberFormat('en-US', 
                        {style: 'currency', currency: 'USD' })
                        .format(history.reduce((a,v) => 
                        a = a + v.freight, 0 ))
                        }/>
        </Container>
    );
  };


const Container = Styled.div`{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 3rem;

    }
    
    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-gap: 0.5rem;
        margin: 1rem 1rem;
        
    }
  }
`; 