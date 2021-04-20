import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {Container,TitleContainer} from "./Cards";



export const LCharts = ({Title, history}) => {
     const getMonthYear = (d) => {
        var dt = new Date(d)
        var MT = dt.toLocaleDateString('en-US');
        return MT
       }

      var result = [];
      history.reduce((res, value) => {
        value.orderdate = getMonthYear(value.orderdate);
       if (!res[value.orderdate]) {
        res[value.orderdate] = { orderdate: value.orderdate, salesamount: 0 };
          result.push(res[value.orderdate])
        }
        res[value.orderdate].salesamount += value.salesamount;
          return res;
        }, {});

        

    return (
        <Container>
            <TitleContainer Title = {Title}> {Title} </TitleContainer>
        <ResponsiveContainer width="99%" height= "85%">
            <LineChart
                    width={500}
                    height={300}
                    data={result}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5}}
            >
            <XAxis axisLine={false} tickLine={false} dataKey="orderdate" />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="salesamount" stroke="#C2A10D" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
        </Container>        
    );
};
