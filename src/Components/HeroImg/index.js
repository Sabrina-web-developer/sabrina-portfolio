import React from 'react'
import {Link} from 'react-router-dom'
import './HeroImg.css'
import IntroImg from '../../assets/intro-bg.jpg'
const HeroImg = () => {
  const handleDownload = () => {
     // using Java Script method to get PDF file
     fetch('Xue(Sabrina_Tang).pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Xue(Sabrina_Tang).pdf';
          alink.click();
      })
  })
  }
  
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg'></img>
      </div>
      <div className='content'>
        <p> Hi, I am a web developer</p>
        <h1>React Developer</h1>
        <div>
          <button to='/CV' className='btn ' onClick={handleDownload}> Download CV</button>
          <Link to='/Contact' className='btn-noactive btn'> Contact</Link>
        </div>
      </div>
      
    </div>
  )
}

export default HeroImg
