import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/ProjectDisplay.css';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';

const ProjectDisplay = () => {
    const { id } = useParams();
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const project = ProjectList[Number(id)];

    const titleAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        delay: 200,
    });

    const imageAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
        delay: 400,
    });

    const infoAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        delay: 600,
    });

    const youtubeAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
        delay: 800,
    });

    return (
        <>
            <h1 className='text-center project-title' style={titleAnimation}>
                {project.name}
            </h1>
            <div className='project-display-container'>
                <div className='display-project'>
                    <animated.div className='project-image-container' style={imageAnimation}>
                        <img src={project.image} alt='' className='project-image' />
                        <div className='buttons'>
                            <a href={project.codeLink} target='_blank' rel='noreferrer'>
                                <button className='link-btn'>
                                    <i className='fa-brands fa-github btn-icon'></i>Github
                                </button>
                            </a>
                            <a href={project.demoLink} target='_blank' rel='noreferrer'>
                                <button className='link-btn'>
                                    <i className='fa-solid fa-link btn-icon'></i>Live Demo
                                </button>
                            </a>
                        </div>
                    </animated.div>
                    <animated.div className='project-info' style={infoAnimation}>
                        <h5 className='text-center '>Tech-Stack : {project.skills}</h5>
                        <p className='project-paragraph text-center'>{project.info}</p>
                    </animated.div>
                </div>

                {project.youtube_url && (
                    <>
                        <h1 className='text-center project-title'> Demo Video</h1>
                        <animated.div className='youtube' style={youtubeAnimation}>
                            <iframe
                                src={project.youtube_url}
                                title={project.title}
                                frameBorder='0'
                                allowFullScreen={true}
                            ></iframe>
                        </animated.div>
                    </>
                )}
            </div>
        </>
    );
};

export default ProjectDisplay;
