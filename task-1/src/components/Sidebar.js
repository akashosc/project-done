import React ,{useState} from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaListAlt,
  FaCalendarAlt,
  FaUser,
  FaTasks,
  FaCog,
  FaChartLine,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
    const [open1,setOpen1]=useState(true);
    const [open2,setOpen2]=useState(true);
    const [open3,setOpen3]=useState(true);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>
          <svg
            fill="#FFFFFF"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z" />
          </svg>
          Deposyt
        </h1>
      </div>
     
      <ul className="sidebar-menu">
        <li>
          <Link className="active" to="/">
            <FaChartLine /> Dashboard
          </Link>
        </li>
        <div className='upper-div'>
          {" "}
          <h6 className="upper-head">Communication</h6>{" "}
           <div></div>
        </div>
        <li >
          <Link to="/messages" style={{display:"flex"}}>
            <FaEnvelope /> Messages 
            <div className='message-box'><h6>2</h6></div>
          </Link>
        </li>
        <li>
          <Link to="/call-log">
            <FaPhone /> Call Log
          </Link>
        </li>
        <li>
          <Link to="/sell-live">
            <FaListAlt /> Sell Live
          </Link>
        </li>
        <div className='upper-div' onClick={()=>setOpen1(!open1)}>
          {" "}
          <h6 className="upper-head">Customer</h6>{" "}
          <svg  className={`upper-svg ${!open1?'rotate-180':''}`} fill="#5a5a5d" width="10px" height="10px" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
        {open1&&<>
            <li>
          <Link to="/customers">
            <FaUser /> Customers
          </Link>
        </li>
        <li>
          <Link to="/pipelines">
            <FaChartLine /> Pipelines
          </Link>
        </li>
        <li>
          <Link to="/partners">
            <FaTasks /> Partners
          </Link>
        </li>
        <li>
          <Link to="/lists">
            <FaListAlt /> Lists
          </Link>
        </li>
        <li>
          <Link to="/notes-tasks">
            <FaTasks /> Notes & Tasks
          </Link>
        </li>
        </>}
       
        <div className='upper-div' onClick={()=>setOpen2(!open2)}>
          {" "}
          <h6 className="upper-head"> Calendar</h6>{" "}
          <svg  className={`upper-svg ${!open2?'rotate-180':''}`} fill="#5a5a5d" width="10px" height="10px" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      {open2&&<> <li >
          <Link to="/calendar" style={{display:"flex"}}>
            <FaCalendarAlt /> Calendar
            <div className='message-box'><h6>2</h6></div>
          </Link>
        </li>
        <li>
          <Link to="/appointment-types">
            <FaCog /> Appointment Types
          </Link>
        </li>
        <li>
          <Link to="/services">
            <FaCog /> Services
          </Link>
        </li>
        </>}
        <div className='upper-div' onClick={()=>setOpen3(!open3)}>
          {" "}
          <h6 className="upper-head">Marketing</h6>{" "}
          <svg  className={`upper-svg ${!open3?'rotate-180':''}`} fill="#5a5a5d" width="10px" height="10px" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
        {open3&&<li>
          <Link to="/campaigns">
            <FaChartLine /> Campaigns
          </Link>
        </li>}
      </ul>
    
      <div className="sidebar-footer">
        
          <div className='profile-div'>
             <div className='profile'><h4>SA</h4></div>
             <div className='profile-content'><h3>My Profile</h3>
                <h6>Super admin</h6>
             </div>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
