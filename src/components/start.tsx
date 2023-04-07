import React from 'react'
import '../styles/start.css'

function Start() {
  return (
    <div className='getStarted-container'>
        <div className="content">
            <h2 style={{color: 'whitesmoke'}}>
                the fastest way from idea to live site. Period.
            </h2>
            <p style={{color: 'grey'}}>
            Flex is a Small SaaS Business. Flex isn’t a traditional company.
            </p>
        </div>
        <div className="buttons">
            <button className='green-btn'>get Started</button>
            <button style={{marginLeft: '10px'}}>Learn more</button>
        </div>
    </div>
  )
}

export default Start