import logo from '../assets/docky-logo.svg'
import '../styles/navbar.css'
import { FaBars } from "react-icons/fa";
import { useRef } from 'react';

function Navbar() {
    const nav = useRef<HTMLElement>(null);
    const classToggle = function (){
        nav.current?.classList.toggle('clicked')
    }
  return (
    <>
        <nav ref={nav}>
            <div className='nav-logotainer'>
                <img className='docky-logo' src={logo} alt="logo here" />
                <div onClick={classToggle} id='bar'><FaBars /></div>
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