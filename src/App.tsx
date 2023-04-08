import './App.css'
import Application from './components/application'
import Desc from './components/desc'
import Features from './components/features-desc'
import Footer from './components/footer'
import HosCards from './components/hos-card'
import Navbar from './components/navbar'
import Pricing from './components/pricing'
import Start from './components/start'
import Working from './components/working'

function App() {

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

export default App
