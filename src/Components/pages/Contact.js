// Must include contact information:

// Email address

// Link to a PDF version of your CV

// Link to your GitHub profile

// Link to your LinkedIn page

// Must have a contact form for handling events

import React from "react";
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

function Contact() {
      return (
        <div className="container mt-5">
          <h2 className="mb-3">Contact Us</h2>
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
