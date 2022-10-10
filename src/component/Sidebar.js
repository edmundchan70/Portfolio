import React ,{useState}from 'react';
import "./css/Sidebar.css";
import { Link } from 'react-router-dom';
import { BsArrowRightSquareFill } from "react-icons/bs";
import {AiOutlineHome ,AiFillInfoCircle,} from "react-icons/ai";
import {SiSkillshare} from "react-icons/si"; 
import {GrContactInfo}from "react-icons/gr";
function Header() {
 
 
    return(
    <div className="column_container">
      <ul className="item_list">
         <a href='#Home'>  <AiOutlineHome /> </a> 
          <a href='#About'><AiFillInfoCircle /> </a>
          <a href='#Project'><SiSkillshare /></a>
         <a><GrContactInfo /></a> 
         
       
      </ul>
        
        
    </div>
    
 
 
    )
   
}

export default Header