import '../styles/Project.css';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Projects = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const leftBoxAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 500 },
  });

  const rightBoxAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 500 },
  });

  return (
    <div className="projects" id='projects'>
      <h1
        className="text head text-center"
        style={{
          marginTop: '5rem',
          color: 'rgb(255, 65, 7)',
        }}
      >
        My Projects
      </h1>
      <div className="projectList">
        {ProjectList.map((project, index) => (
          <animated.div
            key={project.key}
            style={index % 2 === 0 ? leftBoxAnimation : rightBoxAnimation}
          >
            <ProjectItem id={index} name={project.name} image={project.image} />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
