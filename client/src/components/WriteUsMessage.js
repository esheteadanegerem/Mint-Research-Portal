import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const WriteUsMessage = () => {
    const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
   
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { fullName, email, message });
    
  };

  return (
    
    <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="fullName">
        <leb><h6>Full Name</h6></leb>
        <Form.Control
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label><h6>Email</h6></Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label><h6>Message</h6></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      
        <Button
          variant="primary"
          type="submit"
          className="btn-lg bg-warning"
          style={{ marginLeft: '110px',marginTop:'10px' }}
        >
          Submit
        </Button>
      </div>
    </Form>





    </div>
  )
}

export default WriteUsMessage
