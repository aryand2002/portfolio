import React from 'react'
import Github from './Image/github.png'
import LinkedIn from './Image/linkedIn.png'
import Image1 from './Image/myImg.JPG'
import './About.css'

function About() {
    return (
        <div>
            <div className="container2">
            <div className="sub_container3">
                    <img src={Image1} width={'100px'} height={'100px'} />
                </div>
                <div className="sub_container4">
                <h3 className="intro">My <span style={{color:' rgb(113, 113, 205)'}}>Intro</span></h3>
                <h2 className='about'>About me</h2>
                <p className='description1'>I'm a dedicated full-stack developer with a passion for technology and problem-solving. My work reflects a blend of technical expertise, creative problem-solving, and strong communication skills. I thrive on tackling multiple challenges, applying the latest web development trends, and delivering projects to high standards.</p>
                <p className="description2">I have a proven track record of successful projects, where I've honed my skills in modern web development techniques. I'm always eager to learn and adapt, and I value effective teamwork and time management.</p>
                <div className="social_media_logo">
                    <img src={Github}  />
                    <img src={LinkedIn} />
                </div>
                </div>
                

                
            </div>
        </div>
    )
}

export default About