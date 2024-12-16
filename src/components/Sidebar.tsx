import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import Icon from '../assets/Icon.png'
import './Sidebar.css';

const Sidebar: React.FC = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      console.log('User logged out');
      navigate('/login'); 
    }
  };

  return (
    <div className="sidebar">
      <Row className="p-3">
        <Col>
          <img
            src={Icon} 
            alt="Report"
            className="img-thumbnail me-3"
            style={{ width: '100px', height: '50px' }}
          />
        </Col>
        
        <Col>
          <h5>RESPONDER</h5> <h6>ADMINISTRATION</h6>
        </Col>
      </Row>
      
      <ListGroup variant="flush">
        <ListGroup.Item as={Link} to="/" action>
          Dashboard
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/emergencies" action>
          Emergencies
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/incidents" action>
          Incidents
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/officers-users" action>
          Officers / Users
        </ListGroup.Item>
        <ListGroup.Item onClick={handleLogout} action>Logout</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
