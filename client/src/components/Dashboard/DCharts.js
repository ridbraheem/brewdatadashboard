import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer} from "recharts";
import {Container,TitleContainer} from "./Cards";

const COLORS = ['#F37C0E', '#98BC05', '#071383', '#FF8042'];

//const data01 = [
 // { name: "Accessories", value: 400 },
 // { name: "Outdoors", value: 300 },
 // { name: "Home", value: 300 },
//];


export const DCharts = ({Title, history}) => {
  
  var result = [];
  history.reduce((a, c) => {
    const product = c.product;
    if (!a[product.category]) {
    a[product.category] = a[product.category] || {
      "category": product.category,
      "count": 0
    };
    result.push(a[product.category])
  }
    a[product.category].count++;
    return a;
  }, {});

  return (
        <Container>
            <TitleContainer Title = {Title} > {Title} </TitleContainer>
            <ResponsiveContainer width="99%" height="90%">
            <PieChart width={400} height={400}>
                <Pie
                data={result}
                dataKey="count"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                nameKey="category"
            >
              {result.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie> 
            <Tooltip />
            <Legend />
            </PieChart>
            </ResponsiveContainer>      
        </Container>

  );
}