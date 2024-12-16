import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';
import Icon from './assets/Icon.png'

const LoginPage: React.FC = () => {
  const [idCard, setIdCard] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    // ADD AUTHNETICATION HERE


    if (idCard && password) {
      console.log('Logging in...');
      navigate('/');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '25rem' }} className="p-4 shadow">
        <div className="text-center mb-3">
          <img
            src={Icon}
            alt="Logo"
            className="mb-2"
          />
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="idCard" className="mb-3">
            <Form.Label>ID Card Number:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ID Card Number"
              value={idCard}
              onChange={(e) => setIdCard(e.target.value)}
              required
              style={{
                borderColor: '#208B24',
              }}
            />
          </Form.Group>
          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                borderColor: '#208B24',
              }}
            />
          </Form.Group>
          <Button 
            variant="primary" 
            type="submit" 
            className="w-100" 
            style={{
              backgroundColor: '#208B24',
              borderColor: '#208B24',
            }}
          >
            Sign In
          </Button>
        </Form>
        <div className="text-center mt-3">
            Can't Sign In?
          <a href="/reset-password" className="text-decoration-none" // CHANGE THE HREF FOR RESETTING PASSWORD
            style={{
              color: '#208B24',
            }}>
            Reset Password
          </a>
        </div>
      </Card>
    </Container>
  );
};

export default LoginPage;
