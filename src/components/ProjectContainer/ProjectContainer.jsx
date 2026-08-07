import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>

    {project.image && (<img
    src={
      project.image.startsWith("http")
        ? project.image
        : `/images/${project.image}`
    }
    alt=""
    //alt={`${project.name} screenshot`}
    style={{ width: '100%', objectFit: 'cover' }}
    />
    )}

    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={item} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <FaGithub />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <FaExternalLinkAlt />
      </a>
    )}
  </div>
)

export default ProjectContainer