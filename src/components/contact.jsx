import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.scss";

const ContactUs = () => {
  const form = useRef();
  const inputName = useRef();
  const inputEmail = useRef();
  const inputMessage = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text, "message sent");
          inputName.current.value = "";
          inputEmail.current.value = "";
          inputMessage.current.value = "";
        },
        (error) => {
          console.log(error.text, "message not sent");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-infos">
        <div className="contact-address">
          <i className="fa-solid fa-location-dot"></i>
          <span>Address:</span>
          <span>
            753 Lapu-lapu Street, Barangay Makuguihon<br></br> Molave, Zamboanga
            del Sur PH 7023
          </span>
        </div>
        <div className="contact-phone">
          <i className="fa-solid fa-phone"></i>
          <span>Phone:</span>
          <span>+63 9752 0000 83</span>
        </div>
        <div className="contact-email">
          <i className="fa-solid fa-envelope"></i>
          <span>Email:</span>
          <span>chijunmark97@gmail.com</span>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Get in touch with me</h2>
        <input
          className="input-name"
          type="text"
          name="user_name"
          ref={inputName}
          placeholder="Name"
          required
        />
        <input
          className="input-email"
          type="email"
          name="user_email"
          ref={inputEmail}
          placeholder="Email"
          required
        />
        <textarea
          className="input-message"
          name="message"
          ref={inputMessage}
          placeholder="Message"
          required
        />
        <input className="submit" type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default ContactUs;
