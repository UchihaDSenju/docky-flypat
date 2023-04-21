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
                <div className="nav-bars-btn">
                    <button className="green-btn">Sign up</button>
                    <div onClick={classToggle} id='bar'><FaBars /></div>
                </div>
            </div>
            <div className='nav-list'>
                <ul className='nav-elements'>
                    <li><a href='#product'>Product</a></li>
                    <li><a href='#feature'>Feature</a></li>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li style={{display: 'none'}}><a>Resources</a></li>
                    <li><a target='_blank' href='https://4sjorkcf2bx.typeform.com/to/W5ZqWoKu'>Partner with us</a></li>
                </ul>
            </div>
            <div className='auth-elements'>
                <button className='login-btn white-color'>Login</button>
                <button className='signUp-btn green-btn'>Signup</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar