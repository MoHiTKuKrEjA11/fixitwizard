import React from 'react'
import './Navbar.css'
import Logo from './Logo.png'
import { Link } from 'react-router-dom'
// import Toggle from '../Toggle/Toggle'
// import { Link } from 'react-scroll'
// import Services from '../Services/Services'
// import Testimonials from '../Testimonials/Testimonials'
// import Experience from '../Experience/Experience'
// import Intro from '../Intro/Intro'
function Navbar() {
  return (
    <div className="n-wrapper" id='Navbar'>
    <div className="n-left">
        <div className="n-name">
           FixItWizards
        </div>
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType : 'none'}}> 
                <li><Link className='nav-link nav-link-fade-up' to="/">Home</Link></li>
            
                <li><Link className='nav-link nav-link-fade-up' to="/forms">Services</Link></li>
    
                <li><Link className='nav-link nav-link-fade-up' to="/sign">Testimonials</Link></li>
            
            
                <li><Link className='nav-link nav-link-fade-up' to="/home">Experience</Link></li>
            
           
                <li><Link className='nav-link nav-link-fade-up' to="/home">Portfolio</Link></li>
    
            </ul>
        </div>
       
        <button className="button n-button">
            Contact us
        </button>
        
    </div>
    </div>
  )
}

export default Navbar
