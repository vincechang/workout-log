import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import StartWorkout from './components/startWorkout';
import History from './components/history';
import Profile from './components/profile';

function App() {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="start" title="Start Workout">
        <StartWorkout />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Profile />
      </Tab>
      <Tab eventKey="history" title="History">
        <History />
      </Tab>
    </Tabs>
  );
}

export default App;
