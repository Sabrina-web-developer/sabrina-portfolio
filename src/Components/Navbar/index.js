import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick =()=>setClick(!click)
  const [bgColorm, setBgColor] = useState(false)
  const handleChangeColor = ()=>{
    if (window.scrollY >=100){
      setBgColor(true)
    }else{
      setBgColor(false)
    }
  }

  window.addEventListener('scroll', handleChangeColor)
  return (
    <div className={bgColorm ? 'header header-bg':'header'}>
       <Link to='/'>
        <h1>Portfolio</h1>
       </Link>
        <nav >
            <ul className={click? 'nav-menu active':'nav-menu'}>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </nav>
        <div className='hamburger' onClick={handleClick}>
          {click? <FaTimes size={20} style={{color:'#fff'}}/>:<FaBars className='active' size={20} style={{color:'#fff'}}/>
          }
        </div>
    </div>
  )
}

export default Navbar
