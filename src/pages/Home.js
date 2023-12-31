import GitHub from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import "../styles/Home.css";

function Home() {

  const useStylesGitHub = makeStyles(theme => ({

    clickableIcon: {
      color: 'green',
      '&:hover': {
      color: 'black',
      },
    },
  }));

  const classesGit = useStylesGitHub();

  const useStylesLink = makeStyles(theme => ({

    clickableIcon: {
      color: 'green',
      '&:hover': {
      color: '#0077B5',
      },
    },
  }));

 
  const classes = useStylesLink();

  return (
    <div className="home">
      <div className="about"> 
        <h2>Hello! I'm Noel Negron</h2>
        <div className='prompt'>
          <p>I am a current Sophomore at Columbia University, with an interest in software engineering.</p>
          <LinkedInIcon
            onClick={event =>  window.location.href='https://www.linkedin.com/in/noel-negron-889905201/'} 
            className={classes.clickableIcon}
          />
          <GitHub
            onClick={event =>  window.location.href='https://github.com/BxNoel'} 
            className={classesGit.clickableIcon}
          />
        </div>
        </div>
      <div className="skills">
        <h1>Skills and Organizations</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Programming Languages</h2>
            <span> Java, Python, HTML/CSS, JavaScript, C++/C </span>
          </li>
          <li className='item'>
            <h2>Applications</h2>
            <span> IntelliJ, VS Code, QisKit, Node.js, Yarn, Git, ReactJS </span>
          </li>
          <li className='item'>
            <h2>Organizations</h2>
            <span>ColorStack, QubitXQubit, The Coding School, Makers For Change</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home