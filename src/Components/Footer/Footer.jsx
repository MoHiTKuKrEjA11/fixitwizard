import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-icon'>
      <i className="fa-brands fa-instagram fa-xl"></i>
      <i className="fa-brands fa-discord fa-xl"></i>
      <i className="fa-brands fa-facebook fa-xl"></i>
      <i className="fa-brands fa-youtube fa-xl"></i>
      </div>
      <div>
        <ul className='footer-ul'>
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='footer-copy'>
      <i className="fa-regular fa-copyright">&nbsp;</i>FixItWizards
      </div>
    </div>
  )
}

export default Footer
