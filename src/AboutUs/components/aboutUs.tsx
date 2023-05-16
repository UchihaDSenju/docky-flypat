import React from 'react'
import Navbar from '../../Home/components/navbar'
import Desc from './desc'
import Footer from '../../Home/components/footer'
import Team from './team'
import '../styles/about-us.css'

function About() {
  return (
    <>
        <Navbar />
        <Desc />
        <Team />
        <Footer />
    </>
  )
}

export default About