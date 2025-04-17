import React, { useState } from 'react';
import './Sidebar.css';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import { MdOutlineSettings, MdGroup, MdOutlineAccessTime, MdOutlineFeedback } from 'react-icons/md';
import { BsRobot, BsQuestionCircle } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import {logout} from "../../pages/admin/api_detaills/GlobalStates/authSlice"
import { useDispatch } from "react-redux";
import adminPicture from "../../assets/images/HumanSix.png"

const ProfileCom = () => {

    const dispatch = useDispatch();

    const handleLogOut=()=>{
        dispatch(logout());
        navigate("/")
    }

    const [queryModal, setQueryModal] = useState(true)

  return (
    <>
    {
      queryModal && (
      <div className="sidebar">
        {/* Profile Section */}
       
        <button
          id="querydetailsBtn"
          onClick={() => setQueryModal(false)}
        >
          &times;
        </button>
       
        <div className="profile-section">
          
          <div className="profile-pic">
            <img src={adminPicture} alt="" />
          </div>
          <div className="user-name">Folawe Oluwole</div>
          <div className="user-email">folawe.oluwole@stake-cut.co.uk</div>
          <div className="user-id">User Id : Admin874085173</div>
          <button className="sign-out" onClick={handleLogOut}>
            <FiLogOut size={12} /> Sign Out
          </button>
        </div>

        {/* Status */}
        <div className="status">
          <span className="status-indicator green-dot"></span> 
          <select name="" id="selects">
            <option>Available</option>
            <option>online</option>
            <option>away</option>
          </select>
        </div>

        {/* Progress */}
        <div className="progress">
          <div className="progress-label">2/5 Completed</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '40%' }}></div>
          </div>
          <button className="setup-btn">Setup your profile</button>
        </div>

        {/* My Cliq Section */}
        <div className="section">
          <div className="section-title">My </div>
          <ul>
            <li><MdOutlineSettings /> Profile & Settings</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="section">
          <div className="section-title">Help</div>
          <ul>
            <li><BsQuestionCircle /> What's New</li>
            <li><BsQuestionCircle /> Resources</li>
            <li><BsQuestionCircle /> Shortcuts</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="footer">
          <span>Mobile</span>
          <span>Desktop</span>
        </div>
      </div>
      )

    }
    </>
  );
};

export default ProfileCom;
