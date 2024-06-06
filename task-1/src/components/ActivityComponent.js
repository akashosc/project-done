import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import './ActivityComponent.css';

const dataEmails = [
  {name: 'A', value: 2}, {name: 'B', value: 4}, {name: 'C', value: 3}, {name: 'D', value: 5}, {name: 'E', value: 4}
];

const dataSMS = [
  {name: 'A', value: 1}, {name: 'B', value: 3}, {name: 'C', value: 2}, {name: 'D', value: 4}, {name: 'E', value: 3}
];

const dataCalls = [
  {name: 'A', value: 1}, {name: 'B', value: 2}, {name: 'C', value: 1}, {name: 'D', value: 3}, {name: 'E', value: 2}
];

const ActivityComponent = () => {
  return (
    <div className="activity-container">
      <div className="activity-item">
        <div className="activity-info">
          <div className="icon"><svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path fill="#000000" fill-rule="evenodd" d="M0,4 C0,2.895431 0.895431,2 2,2 L14,2 C15.1046,2 16,2.895431 16,4 L16,12 C16,13.1046 15.1046,14 14,14 L2,14 C0.895431,14 0,13.1046 0,12 L0,4 Z M2,4 L14,4 L14,4.0077 L8.00395,7.46952 L2,4.00315 L2,4 Z M2,6.31255 L2,12 L14,12 L14,6.3171 L8.00395,9.77893 L2,6.31255 Z"/>
</svg></div>
          <div className="details">
           
            <div className="stats">
            <div className="type">Emails</div>
              <span className="type">47 Sent</span>
              <span className="type">0 Received</span>
              <span className="type">0 Unread</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="20%" height={40}>
          <LineChart data={dataEmails}>
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="activity-item">
        <div className="activity-info">
          <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="#0000ff" width="30px" height="30px" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/></svg></div>
          <div className="details">
            
            <div className="stats">
            <div className="type">SMS</div>
              <span className="type ">83 Sent</span>
              <span className="type">0 Received</span>
              <span className="type">0 Unread</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="20%" height={40}>
          <LineChart data={dataSMS}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="activity-item">
        <div className="activity-info">
          <div className="icon">📞</div>
          <div className="details">
          
            <div className="stats">
            <div className="type">Calls</div>
              <span className="type">1 Dialed</span>
              <span className="type">1 Completed</span>
              <span className="type">0 Missed</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="20%" height={40}>
          <LineChart data={dataCalls}>
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityComponent;