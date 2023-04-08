import '../styles/footer.css' 

function Footer() {
  return (
    <footer className='footer-container'>
        <div className='footer-logo'>Logo</div>
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