import React from 'react'
import JS from "../public/Js.png";
import Java from "../public/Java.png";
import Python from "../public/Python.png";
import nodeJs from "../public/nodeJs.png";
import C from "../public/C.svg";
import "./css/SkillSet.css"
function SkillSet() {
  return (
    <section className='Skill_Bar_Container'>
    <t>Skill That I have worked before</t>
    <div className="Skill_Container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></img>
      <img src={Java}></img>
      <img src={Python}></img>
      <img src={nodeJs}></img>  
      <img src={JS}></img>  
      <img src={C}></img>
    </div>
  </section>
  )
}

export default SkillSet