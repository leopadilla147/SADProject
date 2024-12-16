import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './OfficersUsersList.css'

const OfficersUsersList: React.FC = () => {

  // EXAMPLE OFFICERS LIST -- REMOVE IF DATABASE ALREADY EXIST
  const officers = [
    {
      id: 1,
      name: 'John Doe',
      occupation: 'Police Officer',
      rank: 'Sergeant',
      availability: 'Available',
    },
    {
      id: 2,
      name: 'Jane Smith',
      occupation: 'Firefighter',
      rank: 'Lieutenant',
      availability: 'On Duty',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      occupation: 'Police Officer',
      rank: 'Officer',
      availability: 'Available',
    },
    {
      id: 4,
      name: 'Emily Davis',
      occupation: 'Firefighter',
      rank: 'Captain',
      availability: 'On Leave',
    },
  ];

  return (
    <div className="officer-list-container">
      <h3>Officers List</h3>
      <ListGroup>
        {officers.map((officer) => (
          <ListGroup.Item key={officer.id}>
            <Card>
              <Card.Body>
                <h5>{officer.name}</h5>
                <p><strong>Occupation:</strong> {officer.occupation}</p>
                <p><strong>Rank:</strong> {officer.rank}</p>
                <p><strong>Availability:</strong> {officer.availability}</p>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default OfficersUsersList;
