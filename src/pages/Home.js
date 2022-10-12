import React ,{useState ,useEffect} from 'react';
import Header from "../component/Sidebar";
import Contact_Bar from "../component/Contact_Bar";
import "./css/Home.css";
import Axios  from 'axios';
function Home() {
  const dogApi  = "https://dog.ceo/api/breeds/image/random";
  const wordDescribe = "4 Years exeprience in programming . Right now , I love to work and learn about  web development, trying to be a full-stack developer.";
  const Home_Pic1 = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png"
  const wordsArr = wordDescribe.split(" ");
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const [randomPic ,setRandomPic] = useState("https://www.programmableweb.com/sites/default/files/Dog%20CEO%20Dog.png")
  const getRandomPic =()=>{
      Axios({
        url: dogApi
      }) .then(resp =>{
        const {message} = resp.data; 
        console.log(message);
        setRandomPic(message);
      })
  }
  useEffect(
   ()=>{
    setTimeout(()=>{
      console.log("TIME OUT ")
       getRandomPic();
    },3000);
}
   ,[randomPic]
  )
  
   return (
    <div id='Home' className='Home'>
      <Contact_Bar className="Contact_Bar"/>
      <div className='Home_container'>
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

          <div className="Home_random_pic">
            <img src={randomPic} />
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