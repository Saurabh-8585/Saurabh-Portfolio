import React, { useEffect } from 'react'
import '../styles/ProjectDisplay.css'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';

const ProjectDisplay = () => {
    const { id } = useParams();
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const project = ProjectList[id]
    return (
        <>
            <h1 className='text-center project-title'>{project.name}</h1>
            <div className='project-display-container'>
                <div className="display-project">
                    <div className="project-image-container">
                        <img src={project.image} alt="" className='project-image' />
                        <div className="buttons">
                            <a href={project.codeLink} target="_blank" rel="noreferrer"><button className='link-btn'><i className="fa-brands fa-github btn-icon"></i>Github</button></a>

                            <a href={project.demoLink} target="_blank" rel="noreferrer"><button className='link-btn'><i className="fa-solid fa-link btn-icon"></i>Live Demo</button></a>
                        </div>
                    </div>
                    <div className="project-info">
                        <h1 className='text-center'>Tech-Stack : {project.skills}</h1>
                        <p className='project-paragraph text-center'>{project.info}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDisplay