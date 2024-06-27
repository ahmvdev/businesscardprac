import React from "react"
import faceImage from "./assets/face.jpeg"
import "./App.css"


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
                  <h3 id="icon-color">Icons</h3>
                </footer>
                
            </div>

        )
    }