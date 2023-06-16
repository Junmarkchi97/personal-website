import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.scss';
import PropagateLoader from 'react-spinners/ClipLoader';

const ContactUs = () => {
  const form = useRef();
  const inputName = useRef();
  const inputEmail = useRef();
  const inputMessage = useRef();
  const sucessMessage = useRef(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    console.log(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      process.env.REACT_APP_PUBLIC_KEY
    );

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result);
          inputName.current.value = '';
          inputEmail.current.value = '';
          inputMessage.current.value = '';
          sucessMessage.current.style.opacity = '1';
          setSending(false);
          setTimeout(() => {
            sucessMessage.current.style.opacity = '0';
          }, 10000);
        },
        (error) => {
          console.log(error.text, 'message not sent');
          setSending(false);
        }
      );
  };

  return (
    <div className='contact-container'>
      <div className='contact-infos'>
        <div className='contact contact-address'>
          <i className='fa-solid fa-location-dot'></i>
          <span>Address:</span>
          <span>
            753 Lapu-lapu Street, Barangay Makuguihon<br></br> Molave, Zamboanga
            del Sur PH 7023
          </span>
        </div>
        <div className='contact contact-phone'>
          <i className='fa-solid fa-phone'></i>
          <span>Phone:</span>
          <span>+63 9752 0000 83</span>
        </div>
        <div className='contact contact-email'>
          <i className='fa-solid fa-envelope'></i>
          <span>Email:</span>
          <a href='mailto:chijunmark97@gmail.com' aria-label='email'>
            chijunmark97@gmail.com
          </a>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <h2>Get in touch</h2>
        <input
          className='input-name'
          type='text'
          name='user_name'
          ref={inputName}
          placeholder='Name'
          required
        />
        <input
          className='input-email'
          type='email'
          name='user_email'
          ref={inputEmail}
          placeholder='Email'
          required
        />
        <textarea
          className='input-message'
          name='message'
          ref={inputMessage}
          placeholder='Message'
          required
        />
        <button className='submit' type='submit'>
          {sending ? (
            <PropagateLoader color='#ffffff' size={16} />
          ) : (
            'Send Message'
          )}
        </button>
        <div className='success-message' ref={sucessMessage}>
          <i className='fa-solid fa-circle-check'></i>Message Sent
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
