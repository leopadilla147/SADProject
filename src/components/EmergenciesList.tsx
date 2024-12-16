import React, { useState } from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const EmergenciesList: React.FC = () => {
  const emergencies = [
    {
      id: 1,
      title: 'Fire Breakout',
      officerNeeded: 'Fireman',
      location: { lat: 40.712776, lng: -74.005974 },
    },
    {
      id: 2,
      title: 'Robbery',
      officerNeeded: 'Police Officer',
      location: { lat: 34.052235, lng: -118.243683 },
    },
  ];

  const [selectedEmergency, setSelectedEmergency] = useState<any>(null);

  const handleRespond = (id: number) => {
    console.log(`Responding to Emergency ID: ${id}`);
  };

  return (
    <div className="emergency-list-container">
      <h3>Emergencies List</h3>
      <ListGroup>
        {emergencies.map((emergency) => (
          <ListGroup.Item key={emergency.id}>
            <Card>
              <Card.Body>
                <h5>{emergency.title}</h5>
                <p>Needed Officer: {emergency.officerNeeded}</p>
                <p>Location: {`Lat: ${emergency.location.lat}, Lng: ${emergency.location.lng}`}</p>
                <Button variant="success" onClick={() => handleRespond(emergency.id)}>
                  Respond
                </Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div style={{ height: '400px', width: '100%' }}>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> {/* ADD GOOGLE API HERE */}
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: 40.712776, lng: -74.005974 }}
            zoom={5}
          >
            {emergencies.map((emergency) => (
              <Marker
                key={emergency.id}
                position={emergency.location}
                onClick={() => setSelectedEmergency(emergency)}
              />
            ))}
            {selectedEmergency && (
              <InfoWindow
                position={selectedEmergency.location}
                onCloseClick={() => setSelectedEmergency(null)}
              >
                <div>
                  <h5>{selectedEmergency.title}</h5>
                  <p>Officer Needed: {selectedEmergency.officerNeeded}</p>
                  <Button variant="success" onClick={() => handleRespond(selectedEmergency.id)}>
                    Respond
                  </Button>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default EmergenciesList;
