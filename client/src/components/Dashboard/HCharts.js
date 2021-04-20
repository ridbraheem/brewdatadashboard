import React from "react";
import {Container,TitleContainer} from "./Cards";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


//const data01 = [
 // { name: "Accessories", value: 400 },
 // { name: "Outdoors", value: 300 },
 // { name: "Home", value: 300 },
//];

export const HCharts = ({Title, history}) => {

    var result = [];
    history.reduce((a, c) => {
      const product = c.product;
      if (!a[product.color]) {
      a[product.color] = a[product.color] || {
        "color": product.color,
        "count": 0
      };
      result.push(a[product.color])
    }
      a[product.color].count++;
      return a;
    }, {});

    return (
        <Container>
            <TitleContainer Title = {Title}> {Title} </TitleContainer>
            <ResponsiveContainer width="99%" height="80%">
            <BarChart
                    width={500}
                    height={300}
                    data={result}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5}}
            >
            <XAxis  type="number" axisLine={false} tickLine={false} domain={['dataMin -1', 'dataMax ']}/>
            <YAxis  type="category" dataKey="color" axisLine={false} tickLine={false} interval={0} />
            <Tooltip />
            <Bar dataKey="count" fill="#C2A10D"  radius={[30,30,30,30]}/>
            </BarChart>
            </ResponsiveContainer>
             
        </Container>        
    );
};