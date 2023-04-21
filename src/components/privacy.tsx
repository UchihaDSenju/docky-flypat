import '../styles/privacy.css'

type Props = {
  isClicked: boolean,
  isClose: Function,
}

function Privacy(props:Props) {
  return props.isClicked ? (
    <>
        <div className="privacy-container">
            <div className="privacy-content">
              <div className="privacy-header">
                <h1>Privacy and Policy</h1>
                <button className='green-btn privacy-close-btn' onClick={() => props.isClose(false)}>close</button>
              </div>
              <div className="privacy-desc">
                <p>At Docky.in, we value your privacy and are committed to protecting your personal information. This Privacy Statement outlines how we collect, use, disclose, and protect your personal information.</p>

                <p>Collection of Personal Information
                We may collect personal information that you voluntarily provide to us when you use our website, such as your name, email address, phone number, and any other information that you choose to provide to us.</p>

                <h2>Use of Personal Information</h2>

                <p>We use your personal information to provide you with the products and services you have requested, such as responding to your inquiries and fulfilling your orders. We may also use your personal information for marketing and advertising purposes, such as sending you promotional emails and newsletters. You can opt-out of these communications at any time by clicking the “unsubscribe” link at the bottom of any email.</p>

                <h2>Disclosure of Personal Information</h2>

                <p>We may disclose your personal information to third-party service providers who assist us in providing our products and services, such as payment processors and shipping companies. We may also disclose your personal information to comply with legal obligations, such as responding to subpoenas or court orders. We do not sell or rent your personal information to third parties.</p>

                <h2>Security of Personal Information</h2>
                <p>Security of Personal Information</p>

                <h2>Cookies</h2>
                <p>We may use cookies to personalize your experience on our website and to improve our website’s performance. A cookie is a small text file that is stored on your device when you visit our website. You can configure your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

                <h2>Links to Other Websites</h2>
                <p>Our website may contain links to other websites that are not operated by us. We are not responsible for the privacy practices of these websites.
                We encourage you to read the privacy statements of these websites before providing any personal information.</p>

                <h2>Children’s Privacy</h2>
                <p>Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you are under the age of 13, please do not provide us with any personal information.</p>

                <h2>Changes to this Privacy Statement</h2>
                <p>We reserve the right to update or modify this Privacy Statement at any time without prior notice. We will post the revised Privacy Statement on our website with the effective date of the changes.</p>

                <p className='grey-color'>If you have any questions or concerns about our Privacy Statement or our privacy practices, please contact us at contact@flypat.com</p>
              </div>
            </div>
        </div>
    </>
  ) : null;
}

export default Privacy