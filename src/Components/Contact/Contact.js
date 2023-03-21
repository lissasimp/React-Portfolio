

import React from "react";
import Button from 'react-bootstrap/Button';
// import "./Styles/Contact.css"
// import Form from 'react-bootstrap/Form';

function Contact() {
      return (
        <div className="container">
          <h2 className="title-font font-semibold text-yellow tracking-widest text-xs">Contact Us</h2>
            <div className="mb-3">
              <input className="form-control" type="text" id="name" placeholder="Name" required />
            </div>
            <div className="mb-3">
              <input className="form-control" type="email" placeholder="Email" id="email" required />
            </div>
            <div className="mb-3">
              <input className="form-control" type="subject" placeholder="Subject" id="subject" required  />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder="Message" id="message" required />
            </div>
            <Button variant="outline-primary" size="lg">Submit</Button>{' '}
        </div>
      )
  }
  
export default Contact;
