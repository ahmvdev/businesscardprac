import React from "react"
import faceImage from "./assets/face.jpeg"
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Info(){
    return(
        <div className="info-content">
            <img className="face-img" src={faceImage} />
            <h2>Ahmad Saeed</h2>
            <h4>Frontend Developer</h4>
            <p id="residence">Islamabad, Pakistan</p>
            <nav>
                <button>Email</button>
            </nav>
            <div className="content">
            <h3>About</h3>
            <p>I am a frontend developer with a particular<br></br> interest in making things simple and <br></br>automating daily tasks. I try to keep up <br></br>with security and best practices, and am <br></br>always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p>Gaming, Mogging, Fighting with<br></br> Goku every other day</p>
            </div>
            <footer>
            <p id="icon-color">Icons</p>  {/* Changed this from <h3> to <p> to make space for icons */}
            <div>
                {/* The icons can be modified using <className> tag */}
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>  
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </div>
            </footer>
        </div>
    )
}