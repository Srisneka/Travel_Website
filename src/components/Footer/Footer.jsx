import React from 'react'
import './footer.css'
import {SiYourtraveldottv} from 'react-icons/si'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <section className='footer'>
      <div className="secContainer container grid">
          <div className="logoDiv">
            <div className="footerLogo">
              <a href="#" className="logo">
              <h1 className='flex'><SiYourtraveldottv className="icon"/>Dot</h1>
              </a>
            </div>

            <div className="socials flex">
          <FaFacebookF className='icon' />
          <FaTwitter  className='icon' />
          <FaInstagram className='icon' />
          </div>

          </div>
          
          <div className="footerLink">
            <span className="linkTitle">
              Information
            </span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </div>

          <div className="footerLink">
            <span className="linkTitle">
              Contact Us
            </span>
            <span className="phone">+444 545 9952</span>
            <span className="email">sneka@gmail.com</span>
          </div>
          
          
      </div>
    </section>
  )
}

export default Footer
