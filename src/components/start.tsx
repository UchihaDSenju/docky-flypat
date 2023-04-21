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
            <button className='green-btn'><a className='white-color' target='_blank' href="https://4sjorkcf2bx.typeform.com/to/Ju4qODxE">Get Started</a></button>
            <button style={{marginLeft: '10px'}}><a target='_blank' href="https://4sjorkcf2bx.typeform.com/to/W5ZqWoKu">Learn More</a></button>
        </div>
    </div>
  )
}

export default Start