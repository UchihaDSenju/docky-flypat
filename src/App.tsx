import './App.css'
import Desc from './components/desc'
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
    </>
  )
}

export default App
