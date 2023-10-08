import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1-10 AUG',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '11-20 AUG',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
 
  {
    name: '1-10 NOV',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },

  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '20-30 AUG',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-background-62zcd';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Bar dataKey="pv" fill="lightgray"  />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
