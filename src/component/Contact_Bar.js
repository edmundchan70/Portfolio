import React from 'react'
import {AiFillGithub,AiFillFacebook,AiFillInstagram} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import "./css/Contact_Bar.css"
function Contact_Bar() {
    const iconSize = 50;
  return (
    <div className="Contact_Bar">
       <a href='mailto:edmundchan70@gmail.com'></a>
        <SiGmail onClick={
          (e)=>{
            e.preventDefault();
            window.open('mailto:edmundchan70@gmail.com')
          }
        } size={iconSize}  className="Icon"/>
        <AiFillGithub size={iconSize}  onClick={
          (e)=>{
            e.preventDefault();
            window.open('https://github.com/edmundchan70')
          }
        }className="Icon"/>
        <AiFillFacebook  size={iconSize} onClick={
          (e)=>{
            e.preventDefault();
            window.open('https://www.facebook.com/edmund.chan.733076')
          }
        } className="Icon"/>
        <AiFillInstagram  size={iconSize}  onClick={
          (e)=>{
            e.preventDefault();
            window.open('https://www.instagram.com/edmundchan70/')
          }
        }className="Icon"/>
    </div>
  )
}

export default Contact_Bar