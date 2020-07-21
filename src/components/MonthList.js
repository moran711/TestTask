import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function UserList() {
    return (
        <Nav variant="pills" className="flex-column">
            <Nav.Item>
                <Nav.Link>January</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>February</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>March</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>April</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>May</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>June</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>July</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>August</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>September</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>October</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>November</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>December</Nav.Link>
            </Nav.Item>
      </Nav>
    )
}
