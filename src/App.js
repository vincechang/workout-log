import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

function App() {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="start" title="Start Workout" disabled>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      </Tab>
      <Tab eventKey="history" title="History">
      </Tab>
    </Tabs>
  );
}

export default App;
