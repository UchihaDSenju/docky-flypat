import logo from '../assets/demoLogo.png'
import '../styles/navbar.css'
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <>
        <nav>
            <div className='nav-logotainer'>
                <img src={logo} alt="logo here" />
                <div id='bar'><FaBars /></div>
            </div>
            <div>
                <ul className='nav-elements'>
                    <li><a>Product</a></li>
                    <li><a>Feature</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Resources</a></li>
                </ul>
            </div>
            <div className='auth-elements'>
                <button className='login-btn'>Login</button>
                <button className='signUp-btn green-btn'>Signup</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar