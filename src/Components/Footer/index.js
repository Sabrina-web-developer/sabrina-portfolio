import React from 'react'
import './Footer.css'
import {FaHome,FaMobileAlt,FaMailBulk,FaGithub,FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footer-container' >
                <div className='left'>
                    <div className='location'>
                        <FaHome size='20' style={{color: '#fff', margin:'2rem'}} />
                        <span>Clayton South VIC 3169</span>
                    </div>
                    <div className='contactNumber'>
                        <FaMobileAlt size='20' style={{color: '#fff', margin:'2rem'}}/>
                        <span>0401 008 221</span>
                    </div>
                    <div className='email'>
                        <FaMailBulk size='20' style={{color: '#fff', margin:'2rem'}}/>
                        <span>xuet1212@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='github'>
                        <a href='https://github.com/Sabrina-web-developer'><FaGithub size='20' style={{color: '#fff', margin:'2rem'}} /></a>
                    </div>
                    <div className='linkedin'>
                        <a href ='linkedin.com/in/xue-tang-66b451213'><FaLinkedin size='20' style={{color: '#fff', margin:'2rem'}} /></a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer
