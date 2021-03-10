import React from 'react';
import GitHubLogo from "../../assets/images/GitHub.png"
import LinkedLogo from "../../assets/images/linkImg.svg"
import AngelLogo from "../../assets/images/angel-hand.png"
import Anthony from "../../assets/images/anthony-bologna.png"
import Hien from "../../assets/images/hien_bui.jpg"
import Josh from "../../assets/images/joshua_bubar_resize.jpeg"
import Lawrence from "../../assets/images/lawrence_nguyen_resize.jpeg"
import './about.scss'

function About() {
    return (
        <div className="about-us-container">
            <div className="person-container">
                <div className="img-name-container">
                    <img src={Lawrence} width="250" height="250" className="picture" alt="Lawrence"/>
                    <h1>Lawrence Nguyen</h1>
                </div>
                <div className="links-container">
                    <a href="https://github.com/SilentNN/" target="_blank" rel="noreferrer"><img src={GitHubLogo} width="50" height="50" alt=''/></a>
                    <a href="https://www.linkedin.com/in/lawrence-nguyen-b75085204/" target="_blank" rel="noreferrer"><img src={LinkedLogo} width="50" height="50" alt=''/></a>
                    <a href="https://angel.co/u/lawrence-nguyen-1/" target="_blank" rel="noreferrer"><img src={AngelLogo} width="50" height="50" alt=''/></a>
                </div>
            </div>
            <div className="person-container">
                <div className="img-name-container">
                    <img src={Anthony} width="250" height="250" className="picture" alt="Anthony"/>
                    <h1>Anthony Bologna</h1>
                </div>
                <div className="links-container">
                    <a href="https://github.com/tonybaloney72/" target="_blank" rel="noreferrer"><img src={GitHubLogo} width="50" height="50" alt=''/></a>
                    <a href="https://www.linkedin.com/in/anthony-michael-bologna/" target="_blank" rel="noreferrer"><img src={LinkedLogo} width="50" height="50" alt=''/></a>
                    <a href="https://angel.co/u/anthony-bologna/" target="_blank" rel="noreferrer"><img src={AngelLogo} width="50" height="50" alt=''/></a>
                </div>
            </div>
            <div className="person-container">
                <div className="img-name-container">
                    <img src={Hien} width="250" height="250" className="picture" alt="Hien"/>
                    <h1>Hien Bui</h1>
                </div>
                <div className="links-container">
                    <a href="https://github.com/hiendbui/" target="_blank" rel="noreferrer"><img src={GitHubLogo} width="50" height="50" alt=''/></a>
                    <a href="https://www.linkedin.com/in/hiendbui/" target="_blank" rel="noreferrer"><img src={LinkedLogo} width="50" height="50" alt=''/></a>
                    <a href="https://angel.co/u/hien-bui-6/" target="_blank" rel="noreferrer"><img src={AngelLogo} width="50" height="50" alt=''/></a>
                </div>
            </div>
            <div className="person-container">
                <div className="img-name-container">
                    <img src={Josh} width="250" height="250" className="picture" alt="Josh"/>
                    <h1>Joshua Bubar</h1>
                </div>
                <div className="links-container">
                    <a href="https://github.com/jbubar/" target="_blank" rel="noreferrer"><img src={GitHubLogo} width="50" height="50" alt=''/></a>
                    <a href="https://www.linkedin.com/in/joshua-bubar-25331a118/" target="_blank" rel="noreferrer"><img src={LinkedLogo} width="50" height="50" alt=''/></a>
                    <a href="https://angel.co/u/jbubar/" target="_blank" rel="noreferrer"><img src={AngelLogo} width="50" height="50" alt=''/></a>
                </div>
            </div>
        </div>
    )
}

export default About;
