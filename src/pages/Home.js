import GitHub from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from 'react'
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about"> 
        <h2>Hello! I'm Noel Negron</h2>
        <div className='prompt'>
          <p>I am a current Sophomore at Columbia University, with an interest in software engineering.</p>
          <LinkedInIcon/>
          <GitHub />
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
            <span> IntelliJ, VS Code, Qiskit, Node.js, Yarn, Git, ReactJS </span>
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