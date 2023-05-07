import Application from './application'
import Desc from './desc'
import Features from './features-desc'
import Footer from './footer'
import HosCards from './hos-card'
import Navbar from './navbar'
import Pricing from './pricing'
import Start from './start'
import Working from './working'
import '../styles/homepage.css'

function HomePage() {
  return (
    <>
        <div>
            <div className='header-container'>
                <Navbar />
                <Desc />
            </div>
        </div>
        <HosCards />
        <Features />
        <Start />
        <Working />
        <Application />
        <Pricing />
        <Footer />
    </>
  )
}

export default HomePage