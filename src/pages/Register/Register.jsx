import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Register({ onSubmit }) {
   const [contact, setContact] = useState({
     name: '',
     email: '',
     password: '',
   });
  
  const registerError = useSelector(state => state.auth.error);
  console.log(registerError);

  const onChange = e => {
    const { name, value } = e.target;

    setContact(prev => ({ ...prev, [name]: value }));
    
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(contact);
    e.target.reset();
  };

  return (
    <>
      <h1 className="phonebook-title">Registration page</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your name"
                name="name"
                size="lg"
                onChange={onChange}
                style={{ maxWidth: '300px' }}
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                size="lg"
                name="email"
                onChange={onChange}
                style={{ maxWidth: '300px' }}
              />
            </Form.Group>
          </Col>

          <Col md className="mb-3 ">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                size="lg"
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChange}
                style={{ maxWidth: '300px' }}
              />
            </Form.Group>
          </Col>
        </Row>
        {registerError !== null && registerError.status !== 401 ? (
          <div>
            <p style={{ color: 'red', fontSize: 25 }}>
              {registerError.statusText}
            </p>
          </div>
        ) : null}

        {registerError !== null && registerError.status === 401 ? (
          <div>
            <p style={{ color: 'red', fontSize: 25 }}>Authorisate please</p>
          </div>
        ) : null}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
}
