import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Home/components/homepage'
import About from './AboutUs/components/aboutUs'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </>
  )
}

export default App
