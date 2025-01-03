import React from 'react'
import './footer.css';
import logo from '../../assets/logo.png';
import { FaGithub, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
function footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-1d'>
          <img src={logo} rel='logo' alt='logo'/>
          <p>The first webApp in Jordan to organize school trips.
            safe, useful and fun trips to any place around the kingdom,
            for more info contact us via social channels, response will be during the working
            time of our orgnization.
          </p>
          <div className='footer-top-1d-icon'>
            <a href='£'><FaInstagram /></a>
            <a href='£'><FaWhatsapp /></a>
            <a href='£'><FaFacebookF /></a>
            <a href='£'><FaGithub /></a>
          </div>
        </div>
        <div className='footer_grid'>
        <div className='footer-top-2d'>
          <div className='footer-slice'>
            <h4>Navigation</h4>
            <p>Home</p>
            <p>About</p>
            <p>Serveces</p>
            <p>Blog</p>
          </div>
        </div>
        <div className='footer-top-3d'>
          <div className='footer-slice'>
            <h4>Services</h4>
            <p>Blckforest</p>
            <p>Rongdhonu</p>
            <p>Meghrong</p>
          </div>
        </div>
        <div className='footer-top-4d'>
          <div className='footer-slice'>
            <h4>Contact Us</h4>
            <p>Amman-Jordan</p>
            <p>demomail89@gmail.com</p>
            <p className='phone'>+962(77) 998-8665</p>
          </div>
        </div>
      </div>
      </div>
      <div className='footer-middle'>
        <p>Copyright ©2022 All rights reserved</p>
      </div>
      <div className='footer-bot'>
        <p className='copy'> This webApp is made with 🤍 by <span>JOurney Team</span></p>
      </div>
    </div>
  )
}

export default footer
