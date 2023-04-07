import './App.css'
import Desc from './components/desc'
import Features from './components/features-desc'
import HosCards from './components/hos-card'
import Navbar from './components/navbar'

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
    </>
  )
}

export default App
