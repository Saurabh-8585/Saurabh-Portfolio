import '../styles/Project.css';
import ProjectItem from '../components/ProjectItem';
import { ProjectList, clientProject } from '../helpers/ProjectList';
import { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';

const Projects = () => {
  const Labels = ['All', 'Client', 'Personal'];
  const [projects, setProjects] = useState([...clientProject, ...ProjectList]);
  const [activeLabel, setActiveLabel] = useState(Labels[0]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);



  const transitions = useTransition(projects, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 200, friction: 20 },
  });

  const options = {
    personal: [...ProjectList],
    all: [...clientProject, ...ProjectList],
    client: [...clientProject],
  };

  const handleFilterProjects = (label) => {
    const filtered = options[label.toLowerCase()];
    setProjects(filtered);
    setActiveLabel(label);
  };

  return (
    <div className="projects">
      <h1
        className="text head text-center"
        style={{
          marginTop: '5rem',
          color: 'rgb(255, 65, 7)',
        }}
      >
        My Projects
      </h1>
      <div className="labels">
        {Labels.map(item => (
          <h4
            key={item}
            onClick={() => handleFilterProjects(item)}
            className={item === activeLabel ? 'active' : 'labelName'}
            style={{ cursor: 'pointer' }}
          >
            {item}
          </h4>
        ))}
      </div>

      <div className="projectList">
        {transitions((style, project, _, index) => (
          <animated.div style={style}>
            <ProjectItem id={project.key} name={project.name} image={project.image} isClient={project?.clientDemoLink} key={index} />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
