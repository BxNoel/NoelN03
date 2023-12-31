import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helper/ProjectList';
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/ProjectDisplay.css"
import { makeStyles } from '@material-ui/core/styles';

function ProjectDisplay() {
    const{ id } = useParams();
    const project = projectList[id]

    const useStylesGitHub = makeStyles(theme => ({

        clickableIcon: {
          color: 'green',
          '&:hover': {
          color: 'black',
          },
        },
      }));

      const classesGit = useStylesGitHub();
    
return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <p>
            <b>Skills:</b>{project.skill}
        </p>
        <GitHubIcon onClick={event =>  window.location.href= project.link}
        className={classesGit.clickableIcon}
        />
    </div>
)
}

export default ProjectDisplay