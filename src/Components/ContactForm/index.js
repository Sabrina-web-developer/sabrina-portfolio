import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './ContactForm.css'
import{FiSend} from 'react-icons/fi'
const ContactForm = () => {
  const form = useRef()
  const sendMessage =(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_ap3buwj', 'template_v2l4kcp', form.current, '8SiBsEU7FUsRuAwpS')
      .then((result) => {
          alert('I have received your message, and will get back to you soon');
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className='form'>
      <form ref={form} onSubmit={sendMessage}>
        <label>Your Name</label>
        <input name ='user_name'type='text' required/>
        <label>Email</label>
        <input name='user_email'type='email' required/>
        <label>Subject</label>
        <input type='text' required/>
        <label name='message'>Message</label>
        <textarea rows='6' placeholder='Type Your Message Here' required />
        <button className='btn'>Send </button><FiSend fontSize='25' style={{color:'#fff'}}/>
      </form>
    </div>
  )
}

export default ContactForm
