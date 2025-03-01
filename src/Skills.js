import React from 'react'
import './Skills.css'
import Html from './Image/html.webp'
import Css from './Image/css.png'
import Java from './Image/java.png'
import Javascript from './Image/JavaScript.png'
import Laravel from './Image/laravel.png'
import Php from './Image/php.png'
import Mysql from './Image/mysql.webp'
import Jquery from './Image/jquery.png'
import C_logo from './Image/C_Logo.png'

function skills() {
  return (
    <div>
        <div className="container3">
        <div className='tech-stack'>TECH STACK</div>
        <div className="grid-container">
            <div className="grid">
                <img src={Html} />
                <p>HTML</p>
            </div>
            <div className="grid">
                <img src={Css} />
                <p>CSS</p>
            </div>
            <div className="grid">
                <img src={Java} />
                <p>JAVA</p>
            </div>
            <div className="grid">
                <img src={Javascript} />
                <p>JAVASCRIPT</p>
            </div>
            <div className="grid">
                <img src={Laravel} />
                <p>LARAVEL</p>
            </div>
            <div className="grid">
                <img src={Php} />
                <p>PHP</p>
            </div>
            <div className="grid">
                <img src={Mysql} />
                <p>MYSQL</p>
            </div>
            <div className="grid">
                <img src={Jquery} />
                <p>JQUERY</p>
            </div>
            <div className="grid" id='javagrid'>
                <img src={C_logo} />
                <p>C</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default skills