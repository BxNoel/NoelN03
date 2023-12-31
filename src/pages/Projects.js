import React from 'react'
import ProjectItem from '../componets/ProjectItem'
import "../styles/Project.css";
import { projectList } from "../helper/ProjectList";


function Projects() {
  return (
    <div className='projects'>
      <h1>Personal Projects and Research</h1>
      <div className='projectList'>
        {projectList.map ((project, idx) => {
          return <ProjectItem id ={idx} name={project.name} image={project.image} />
        })}
      </div>
    </div>
  )
}

export default Projects