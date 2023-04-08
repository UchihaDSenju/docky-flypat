import './App.css'
import Application from './components/application'
import Desc from './components/desc'
import Features from './components/features-desc'
import HosCards from './components/hos-card'
import Navbar from './components/navbar'
import Pricing from './components/pricing'
import Start from './components/start'

function App() {

  return (
    <>
      <div style={{height: '900px'}}>
        <div className='header-container'>
          <Navbar />
          <Desc />
        </div>
      </div>
      <HosCards />
      <Features />
      <Start />
      <Application />
      <Pricing />
    </>
  )
}

export default App
