import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Nav() {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Users info</Navbar.Brand>
                <Navbar.Text>
                    On our site you can get information about your users.
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}
