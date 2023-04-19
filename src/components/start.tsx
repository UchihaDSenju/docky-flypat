import React from 'react'
import '../styles/start.css'

function Start() {
  return (
    <div className='getStarted-container'>
        <div className="content">
            <h2 style={{color: 'whitesmoke'}}>
            "Revolutionize Your Hospital Management with Docky”.
            </h2>
            <p className='p-20' style={{color: 'grey'}}>
            Docky is a Comprehensive Hopital Management Suite. 
            </p>
        </div>
        <div className="buttons">
            <button className='green-btn'>Get Started</button>
            <button style={{marginLeft: '10px'}}>Learn More</button>
        </div>
    </div>
  )
}

export default Start