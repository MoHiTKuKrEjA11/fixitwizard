import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <>
    <Navbar />
    <div className='home'>
      <h1 className='homeh1'>
        <span>Have an Error ??</span>
        <span>Not able to find solution</span>
        <span>Still not get ??</span>
        <span>NO WORRY WE HAVE A SOLUTION</span>
        <span>Fix It Wizards...</span>
      </h1>
    </div>
    <Footer />
    </>
  )
}

export default Home
