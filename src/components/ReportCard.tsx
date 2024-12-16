import React from 'react';
import { Card, Button } from 'react-bootstrap';
import sampleImage from '../assets/samplePic.png'

interface ReportCardProps {
  title: string;
  date: string;
  time: string;
  status: string;
}

const ReportCard: React.FC<ReportCardProps> = ({ title, date, time, status }) => {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex align-items-center">
        <img
          src={sampleImage} 
          alt="Report"
          className="img-thumbnail me-3"
          style={{ width: '150px', height: '100px' }}
        />
        <div className="flex-grow-1">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {date} <br />
            {time}
          </Card.Text>
        </div>
        <div className="text-end">
          <span className="text-success">{status}</span>
          <br />
          <Button variant="link">View Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReportCard;
