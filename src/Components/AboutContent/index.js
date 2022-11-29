import React from 'react'
import { Link } from 'react-router-dom'
import './AboutContent.css'
import ReactTop from '../../assets/react1.jpg'
import ReactBottom from '../../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>A passionate web developer with major strength in React web development.
        Looking for a permanent job opportunity as a front-end web developer.
       Master degree of Information Systems and Technology, UTAS. 3+ year experience in IT Support Field.
       A self-driven, well-organised planner who communicates effectively with cross-functional and cross-culture colleagues.
      A self-thinking engineer who likes to solve problems with an analytical method</p>
      </div>
      <Link to='/contact'>
        <button className='btn'> Contact</button>
      </Link>

      <div className='right'>
        <div className='img-container'>
        <div className='img-stack top'>
            <img src={ReactTop} className='img' alt='true' />
        </div>
        <div className='img-stack bottom'> 
            <img src={ReactBottom} className='img' alt='true'/>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default AboutContent
