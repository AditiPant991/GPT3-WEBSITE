import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__name'>Do you want to step in to the future before others  </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>12 La,USA. PVT.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Term & Conditions</p>
          <p>Privacy Policy </p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>12,USA</p>
          <p>424242420 media</p>
          <p>info@ADITI.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
      <p>2023 ADITI.All rights reserved.</p>  
      </div>
    </div>
  )
}

export default Footer