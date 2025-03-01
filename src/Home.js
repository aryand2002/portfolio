import React from 'react'
import Image1 from './Image/myImg.JPG'
import './Home.css'

function Home() {
    return (
        <>
            <div className="container1">
                <div className="sub_container1">
                    <h2 className='starter'>Hello,&nbsp;<span>I'm</span></h2>
                    <p className="name">Aryan Dewangan</p>
                    <p className="job">Full Stack Developer</p>
                    <p className='description'>I am a full stack developer. I enjoy writing clean code, building user interfaces expert and more.</p>
                    <button className='resume'>Resume</button>
                </div>
                <div className="sub_container2">
                            <img className='myimg' src={Image1}/>
                </div>


            </div>


        </>
    )
}

export default Home