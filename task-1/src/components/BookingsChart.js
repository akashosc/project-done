import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: '4/2 Tue', Cancelled: 2, Rescheduled: 11, NoShow: 1, Paid: 0, Other: 36, Completed: 2 },
  { name: '4/3 Wed', Cancelled: 3, Rescheduled: 8, NoShow: 2, Paid: 0, Other: 32, Completed: 2 },
  // Add more data points here...
];

const BookingsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Cancelled" stackId="1" stroke="#ff0000" fill="#ff0000" />
        <Area type="monotone" dataKey="Rescheduled" stackId="1" stroke="#ffa500" fill="#ffa500" />
        <Area type="monotone" dataKey="NoShow" stackId="1" stroke="#000000" fill="#000000" />
        <Area type="monotone" dataKey="Paid" stackId="1" stroke="#00ff00" fill="#00ff00" />
        <Area type="monotone" dataKey="Other" stackId="1" stroke="#8b4513" fill="#8b4513" />
        <Area type="monotone" dataKey="Completed" stackId="1" stroke="#32cd32" fill="#32cd32" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default BookingsChart;