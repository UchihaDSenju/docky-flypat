import '../styles/footer.css' 
import logo from '../assets/docky-logo.svg'
function Footer() {
  return (
    <footer className='footer-container'>
      <h1 className="footer-mob-header white-color">"Revolutionize Your Hospital Management with Docky”.</h1>
        <div className='footer-logo'><img className='docky-logo' src={logo} alt="logo here" /></div>
        <div className='footer-link-container'>
            <ul className='footer-links'>
                <li><a>Product</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Resources</a></li>
                <li><a>Careers</a></li>
                <li><a>Help</a></li>
                <li><a>Privacy</a></li>
            </ul>
        </div>
        <hr />
        <div className='copyright'>© 2023 Docky. All rights reserved.</div>
    </footer>
  )
}

export default Footer