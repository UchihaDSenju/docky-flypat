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
            <div className='nav-content'>
                <div>
                    <ul className='nav-elements'>
                        <li>Product</li>
                        <li>Feature</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className='auth-elements'>
                    <button className='login-btn'>Login</button>
                    <button className='signUp-btn'>Signup</button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar