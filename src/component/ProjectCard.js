import React from 'react';
import "./css/ProjectCard.css";

function ProjectCard({Title, Link="https://www.google.ca/", Description="Test Project"}) {
  return (
    <div className='Project_Contiainer'>
            <div>
                <p>{Title}</p>
                <t>{Description}</t>
            </div>
        </div>
  )
}

export default ProjectCard