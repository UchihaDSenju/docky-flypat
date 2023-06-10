import React from 'react'
import '../styles/start.css'

function Start() {
  return (
    <div className='getStarted-container'>
        <div className="content">
            <h2 style={{color: 'whitesmoke'}}>
            "Revolutionize Your Hospital Management with Docky.”
            </h2>
            <p className='p-20 grey-color-3'>
            Docky is a Comprehensive Hopital Management Suite. 
            </p>
        </div>
        <div className="buttons">
            <a target='_blank' href="https://4sjorkcf2bx.typeform.com/to/Ju4qODxE"><button className='grey-btn white-color'>Get Started</button></a>
            <a target='_blank' href="https://4sjorkcf2bx.typeform.com/to/W5ZqWoKu"><button style={{marginLeft: '10px'}}>Learn More</button></a>
        </div>
    </div>
  )
}

export default Start