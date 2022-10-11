import React, { useRef, useState } from 'react';
import "./css/ProjectCard.css";

import Carousel from "@itseasy21/react-elastic-carousel";
 

function ProjectCard({Project}) {
  const carouselRef=useRef(null);
 
  let resetTimeout;
  const maxPage = 3 ; 
  const {title , Link ,Pic1 ,Pic2 , Pic3 , Description} = Project
  const goTo =()=>{
    window.open(Link)
  }
  return (
    <div className='Project_Contiainer'>
            <div className="Project_Amazon">
                  <p>{title}</p>
                  <Carousel className='Carousel_comp' 
                  
                  ref={carouselRef}
                
                    
                      onNextEnd={({ index }) => {
                        clearTimeout(maxPage)
                        if (index + 1 === maxPage) {
                           resetTimeout = setTimeout(() => {
                            carouselRef.current.goTo(0)
                          }, 1500) // same time
                        }
                   }}>
                  <div className='Carousel_Component' onClick={goTo}>
                        <img src={Pic1}  className="Carousel_Component image"></img>
                        <div className="Carousel_Component Link">Code</div>
                    </div>
                  
                    <div className='Carousel_Component' onClick={goTo}>
                        <img src={Pic2}  className="Carousel_Component image"></img>
                        <div className="Carousel_Component Link">Code</div>
                    </div>
                   
                    <div className='Carousel_Component' onClick={goTo}>
                        <img src={Pic3} className="Carousel_Component image"></img>
                        <div className="Carousel_Component Link">Code</div>
                    </div>
                   
                  </Carousel>
            
                  <t>{Description}</t>
            
            </div>
            
        </div>
  )
}

export default ProjectCard