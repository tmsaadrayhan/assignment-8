import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
  
const Chart = ({ assignments }) => {
    console.log(assignments);
    return (
        <div>
            <AreaChart
                width={500}
                height={400}
                data={assignments}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignmentNo" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="mark"
                    stackId="1"
                    stroke="#363636"
                    fill="#363636"
                />
            </AreaChart>
        </div>
    );
};

export default Chart;