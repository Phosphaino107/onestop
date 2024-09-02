// src/components/Contact.js

import React from 'react';
import './contact.css'; 

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          We'd love to hear from you! Whether you have a question, feedback, or need support, feel free to reach out.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">
              <i className="fas fa-user"></i>
            </label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>
            </label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">
              <i className="fas fa-info-circle"></i>
            </label>
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <i className="fas fa-comments"></i>
            </label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
