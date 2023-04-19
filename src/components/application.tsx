import React from 'react'
import '../styles/application.css'
import hero from '../assets/systemLogo.svg'
import Badge from './badge'

function Application() {
  return (
    <div className='application-container'>
      <Badge content='application' />
      <h1 style={{textAlign: 'center', marginBottom: '20px'}}>8 apps, All-in-One Suite</h1>
      <img className='hero' src={hero} alt="" />
      <p className='application-desc p-20'>With a range of features designed specifically for hospital owners, you can enjoy increased efficiency, improved patient care, and cost savings.</p>
      <div className="buttons">
          <button className="green-btn">Learn More</button>
          <button style={{marginLeft: '10px'}}>About Us</button>
      </div>
    </div>
  )
}

export default Application