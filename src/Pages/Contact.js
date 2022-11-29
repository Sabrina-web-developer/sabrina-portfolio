import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import ContactForm from '../Components/ContactForm'
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="CONTATC" text="Let's have a chat"/>
      <ContactForm />
      <Footer />
    </div>
  ) 
}

export default Contact
