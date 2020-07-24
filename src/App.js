import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MonthList from './components/MonthList';
import UserList from './components/UserList';
import Nav from './components/Nav';

function App() {
  return (
          <div className='container'>
            <Nav />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <MonthList />
                </Col>
                <Col sm={9}>
                  <UserList />
                </Col>
              </Row>
            </Tab.Container>
          </div>

  );
}

export default App;
