import React  ,{useState}from 'react'
import "./css/Project.css"
import {pic_project1} from "./public/config"
import {FiArrowUpRight} from "react-icons/fi"
import ProjectCard from "../component/ProjectCard"
function Project() {
  const id = "Project";
  const [tab , setTab] = useState(false) ; //true => 1st
 const handleClick = ()=>{
  setTab(!tab);
  console.log(tab);
 }

 const projects = {
  project1: {
    title:"Amazon Ez clone",
    Link:"https://github.com/edmundchan70/EZ_Amazon_repo",
    Description:"This project is a clone of Amazon."
  } , 
  project2:{
    title:"Portfolio" ,
    Link: 
  }
 }
 
  return (
    <section className="Project" id={id}>
            <div className='Project_Intro'>
                <p>Project</p>
                <t>Project ...</t>
            </div>
            <div className="Project_Button">
                <button className={tab? "Button_Left active" : "Button_Left"}
                onClick={handleClick} >1</button>
                <button onClick={handleClick}
                className={!tab? "Button_Right active" : "Button_Right"} >2</button>
            </div>
            
            <div className="ProjectCard">
                      <ProjectCard   />
                </div>
        
    </section>
  )
   
 
}

export default Project