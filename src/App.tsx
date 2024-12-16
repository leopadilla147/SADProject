import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import EmergenciesList from './components/EmergenciesList';
import IncidentsList from './components/IncidentsList';
import OfficersUsersList from './components/OfficersUsersList';
import LoginPage from './Login';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <div className="app-container">
              <Sidebar />
              <div className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/emergencies" element={<EmergenciesList />} />
                  <Route path="/incidents" element={<IncidentsList />} />
                  <Route path="/officers-users" element={<OfficersUsersList />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
