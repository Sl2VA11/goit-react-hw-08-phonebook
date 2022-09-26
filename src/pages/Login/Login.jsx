import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Login( {onSubmit} ) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
  });
  const loginError = useSelector(state => state.auth.error);
  
  const handleChange = e => {
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
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                size="lg"
                onChange={handleChange}
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
                name="password"
                onChange={handleChange}
                placeholder="Password"
                style={{ maxWidth: '300px' }}
              />
            </Form.Group>
          </Col>
        </Row>
        {loginError !== null && (
          <div className="">
            <p
              style={{ color: 'red', fontSize: 25 }}>
              {loginError.statusText}
            </p>
          </div>
        )}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
}
