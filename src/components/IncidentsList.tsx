import React from 'react';
import ReportCard from './ReportCard';
import { Form, Button } from 'react-bootstrap';

const IncidentsList: React.FC = () => {
  return (
    <div className="p-4">
      <h2>Incidents List</h2>

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

export default IncidentsList;
