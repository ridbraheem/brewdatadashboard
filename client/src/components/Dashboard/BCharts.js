import React from "react";
import {Container,TitleContainer} from "./Cards";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const BCharts = ({Title, history}) => {

    var result = [];
    history.reduce((a, c) => {
      const product = c.product;
      if (!a[product.subcategory]) {
      a[product.subcategory] = a[product.subcategory] || {
        "subcategory": product.subcategory,
        "count": 0
      };
      result.push(a[product.subcategory])
    }
      a[product.subcategory].count++;
      return a;
    }, {});
  
    return (
        <Container>
            <TitleContainer Title = {Title} > {Title} </TitleContainer>
            <ResponsiveContainer width="99%" height="80%">
            <BarChart
                    width={500}
                    height={300}
                    data={result}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5}}
            >
            <XAxis axisLine={false} tickLine={false} dataKey="subcategory" angle={-90} textAnchor="end" interval = {0} height ={120} />
            <YAxis axisLine={false} tickLine={false} hide />
            <Tooltip />
            <Bar dataKey="count" fill="#C2A10D" label />
            </BarChart>
            </ResponsiveContainer>
             
        </Container>        
    );
};