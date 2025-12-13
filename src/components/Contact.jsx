import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('Message sent successfully! 🎉');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          setStatus('Failed to send message. Try again.');
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="page-section" data-aos="fade-up">
      <div className="container">
        <h3>Contact Me</h3>
        <div className="contact-grid">
          <div className="card">
            <h5>Send a Message</h5>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="from_name" placeholder="Your Name" required />
              <input type="email" name="from_email" placeholder="Your Email" required />
              <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
              {status && <p className="status-message">{status}</p>}
            </form>
          </div>
          <div className="card contact-info">
            <h5>Other Ways to Reach Me</h5>
            <ul>
              <li><strong>Mobile:</strong> (+27) 836020904</li>
              <li><strong>Email:</strong> <a href="mailto:jaydenlberg2005@gmail.com">jaydenlberg2005@gmail.com</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jayden-liebenberg-679794336/" target="_blank" rel="noopener noreferrer">Profile</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/Cardinal117" target="_blank" rel="noopener noreferrer">Profile</a></li>
            </ul>
          </div>
        </div>

        {/* Floating WhatsApp Bubble */}
        <a
          href="https://wa.me/27836020904?text=Hi%20Jayden%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20chat!"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>
      </div>
    </section>
  );
};

export default Contact;