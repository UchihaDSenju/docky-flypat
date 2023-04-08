import React from 'react'
import '../styles/application.css'
import hero from '../assets/systemLogo.svg'

function Application() {
  return (
    <div className='application-container'>
        <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Great work starts with your app</h1>
        <img className='hero' src={hero} alt="" />
        <p>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</p>
        <div className="buttons">
            <button className="green-btn">Learn More</button>
            <button style={{marginLeft: '10px'}}>About Us</button>
        </div>
    </div>
  )
}

export default Application