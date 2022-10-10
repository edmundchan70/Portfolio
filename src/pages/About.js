import React from 'react'
import {HiAcademicCap} from "react-icons/hi"
import "./css/About.css"
import {BiCrown} from "react-icons/bi"
function About() {
  return (
    <section id="About" className="About">
      <div className="Pic_Container">
          PICTURE
      </div>
      <div className='About_Container'>
       <article className='About_Block'>
         <HiAcademicCap className="Icon"  />
          <p>Education   </p>
         <button className='School_Name'>
           Toronto Metropolitan University </button>
          <button className='School_Name'>Computer Science (Year3)</button>
        </article>
        <article className='About_Block'>
          <BiCrown className='Icon' />
          <p> <strong>Experience: </strong></p>
          <button className='Experience_Year'>3+ </button>
          <t>Year in Programming</t>
        </article>
        <article className='About_Block'>
          <t>Project Num: </t>
          <button className='About_Project_Num'>10+</button >
        </article>
      <div className="Text_Container">
      <t >Currently a Year 3 ,CS Major Student At TMU. I have 4+ Programming experience. Right now I 
        self-teaching my-self to be a full-stack developer. Other than personal projects ,
         I have worked as an Intern in Kaidu.Ai and get hand-on experience on developing and
         testing APIS and websites. Always willing and looking foward to learn new things! 
           </t>
    
      </div>
      </div>

      
    </section >
  ) 
}
export default About

/*
   <p> Experience: <br />
            Summer Internship(May 2022-Aug 2022) <br />
            Work as a software/web developer , <br />
            Test/build API,Alogrithm , <br />
            Fix/Devlop IOS apps <br />
            Experience in manipulating database <br />
*/