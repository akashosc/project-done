import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Add other routes here as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
