import '../styles/footer.css' 
import logo from '../assets/docky-logo.svg'
import Privacy from './privacy'
import { useState } from 'react'
function Footer() {

  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <footer className='footer-container'>
      <Privacy isClicked={buttonPopup} isClose={setButtonPopup} />
      <h1 className="footer-mob-header white-color">"Revolutionize Your Hospital Management with Docky”.</h1>
        <div className='footer-logo'><img className='docky-logo' src={logo} alt="logo here" /></div>
        <div className='footer-link-container'>
            <ul className='footer-links'>
          <   li><a href='#product'>Product</a></li>
              <li><a href='#feature'>Feature</a></li>
              <li><a href='#pricing'>Pricing</a></li>
              {/* <li style={{display: 'none'}}><a>Resources</a></li>
              <li style={{display: 'none'}}><a>Careers</a></li> */}
              <li><a target='_blank' href='https://4sjorkcf2bx.typeform.com/to/W5ZqWoKu'>Support</a></li>
              <li><a onClick={() => setButtonPopup(true)}>Privacy</a></li>
            </ul>
        </div>
        <hr />
        <div className='copyright'>© 2023 Docky. All rights reserved.</div>
    </footer>
  )
}

export default Footer