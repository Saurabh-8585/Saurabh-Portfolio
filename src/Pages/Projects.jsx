import React from 'react'
import '../styles/Project.css'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='text head text-center' style={{
        marginTop: "5rem",
        color: " rgb(255 65 7)"
      }}>My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} image={project.image} key={project.key} />
        })}

      </div>
    </div>
  )
}

export default Projects