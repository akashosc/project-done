import React from 'react';
import BookingsChart from '../components/BookingsChart';
import ActivityComponent from '../components/ActivityComponent';
const Dashboard = () => {
  return (
    <div className="" style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
      <ActivityComponent/>

     <BookingsChart  />
    </div>
  );
};

export default Dashboard;
