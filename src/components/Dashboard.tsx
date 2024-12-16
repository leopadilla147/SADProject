import React from 'react';
import ReportCard from './ReportCard';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h2>DASHBOARD</h2>
      <Row className="text-center mb-4">
        <Col><div className="border p-4">Active Reports</div></Col>
        <Col><div className="border p-4">Reports in Progress</div></Col>
        <Col><div className="border p-4">Resolved Reports</div></Col>
      </Row>

      <h4>Reports</h4>
      <Form className="d-flex mb-3">
        <Form.Control
          type="text"
          placeholder="Search report ID"
          className="me-2"
        />
        <Button variant="secondary">Search</Button>
      </Form>

      <ReportCard
        title="Robbery"
        date="12/07/2024"
        time="10:30 PM"
        status="Under Investigation"
      />
      <ReportCard
        title="Robbery"
        date="12/07/2024"
        time="10:30 PM"
        status="Under Investigation"
      />
    </div>
  );
};

export default Dashboard;
