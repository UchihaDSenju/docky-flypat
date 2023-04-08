import '../styles/footer.css' 

function Footer() {
  return (
    <footer className='footer-container'>
        <div className='footer-logo'>Logo</div>
        <div className='footer-link-container'>
            <ul className='footer-links'>
                <li>Product</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li>Careers</li>
                <li>Help</li>
                <li>Privacy</li>
            </ul>
        </div>
        <hr />
        <div className='copyright'>© 2023 Docky. All rights reserved.</div>
    </footer>
  )
}

export default Footer