import React, { useState, useEffect }  from "react";
import Styled from "styled-components";
import {TopContainer} from "./TopContainer";
import {MidContainer} from "./MidContainer";
import {BottomContainer} from "./BottomContainer"
import { isAuthenticated } from "../../auth";
import { orderHistory } from "../apiProfile";

export const DashboardContent = () => {

  const [history, setHistory] = useState([]);

  const { token, user: { _id, customerkey}} = isAuthenticated();

  const init = () => {
    orderHistory(_id, token, customerkey ).then(data => {
        if (data.error) {
        var nodata =  [{
                "salesamount": 0,
                 "taxamount": 0,
                 "freight": 0,
                 "orderdate": "2011-05-19T04:00:00.000Z",
                 "product": {
                     "color": "N/A",
                     "category": "N/A",
                     "subcategory": "N/A"
                 }
             }]
            setHistory(nodata);
        } else {
            setHistory(data);
        }
    });
};

useEffect(() => {
    init();
}, []);
                                
    return (
        <Content> 
            <TopContainer history = {history}/>
            <MidContainer history = {history}/>
            <BottomContainer history = {history}/>
        </Content>
    );
  };

const Content = Styled.div`{
    background: white;
    grid-area: Content;
    display: grid;
    grid-template-rows: 0.8fr 3fr 3fr;
    grid-gap: 2rem;
    margin: 0rem 2rem 1.5rem;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0.8fr 1fr 1fr;
        grid-gap: 0.5rem;
        margin: 1rem 1rem;
        
    }
  }
`; 


