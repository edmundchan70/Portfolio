import React ,{useState} from 'react';
import Header from "../component/Sidebar";
import Contact_Bar from "../component/Contact_Bar";
import "./css/Home.css";
function Home() {
  
  const wordDescribe = "4 Years exeprience in programming . Right now , I love to work and learn about  web development, trying to be a full-stack developer."
  const Home_Pic1 = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png"
  const wordsArr = wordDescribe.split(" ");
 
  return (
    <div id='Home' className='Home'>
      <Contact_Bar className="Contact_Bar"/>
      <div className="description">
        <br />
        <button className="text">HI</button>
        <br />
        <button className="text">This is Edmund</button>
        <br /> 
        <button className="text">A Computer Science Student</button>
        <br/>
        <br />
       <div className="description_detail">
       {wordsArr.map(
          (item , i )=>{
             
            return (<button className={i}>{item} </button>)
          }
        )}
        
   
       </div>
      </div>
      <a href='/Resume.pdf' download={true} id="download" hidden={true}></a>
      
      <button className='button-85' onClick={
        (e) =>{
          e.preventDefault();
          document.getElementById("download").click();
        }
      } >Download Resume</button>
     
    </div>
  )

}

export default Home