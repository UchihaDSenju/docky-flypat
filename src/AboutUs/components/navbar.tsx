import '../styles/navbar.css'
import Logo from '../assets/docky-logo.svg'

function Navbar() {
  return (
    <>
      <nav id='aboutUs-nav'>
        <div className="nav-logo"><a href="#" target='_blank'><img src={Logo} alt="Logo" /></a></div>
        <div className="nav-content">
          <ul>
            <li><a>Product</a></li>
            <li><a>Feature</a></li>
            <li><a>Pricing</a></li>
            <li style={{marginRight :'10px'}}><a>Resources</a></li>
          </ul>
        </div>
        <div className="nav-buttons"><a href="#" target='_blank'><button className='green-btn'>Sign Up</button></a></div>
      </nav>
    </>
  )
}

export default Navbar