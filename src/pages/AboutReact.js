import React  ,{useState}from 'react';
import "./css/AboutReact.css";
import ProjectCard from "../component/ProjectCard"
import pic1 from "../public/checkNodeNpm.png"
import pic2 from "../public/npx.png"
import pic3 from "../public/initPage.png"
import build_pic1 from "../public/Remove.png"
import build_pic2 from "../public/HelloWorld.png"
import build_pic3 from "../public/LearnReact.png"

function AboutReact() {
  
  const id = "Project";
  const [tab , setTab] = useState(false) ; //true => 1st
  const handleClick = ()=>{
  setTab(!tab);
  console.log(tab);
 }

 const react = {
  install: {
    title:"Installing",
    Link: "https://reactjs.org/docs/create-a-new-react-app.html",
    Description:["Check you have node.js and npm installed",
                 "Create react app with `npx create-react-app fileName`",
                 "Once terminated , your init page is at http://localhost:3000  "],
    Pic1:pic1,
    Pic2:pic2 ,
    Pic3:pic3
  } ,
  build: {
    title:"BUILDING",
    Link: "https://reactjs.org/docs/create-a-new-react-app.html",
    Description:["GO to app.js , Remove the high-lighted part ",
                 "Start writing your own wepage by adding html and css code! ",
                 "Learn more "],
    Pic1:build_pic1,
    Pic2:build_pic2 ,
    Pic3:build_pic3
  } 
 }
 
  return (
    <section className="Project" id={id}>
           
                <p>INTRO TO REACT !</p>
             <div className="Project_Button">
                <button className={tab? "Button_Left active" : "Button_Left"}
                onClick={handleClick} >SETUP , INSTALL</button>
                <button onClick={handleClick}
                className={!tab? "Button_Right active" : "Button_Right"} >BUILD </button>
            </div>
            
            <div className="ProjectCard">
                      <ProjectCard  Project={tab ?  react.install : react.build}/>
                </div>
        
    </section>
  )
   
 
}

export default AboutReact