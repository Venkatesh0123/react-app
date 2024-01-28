import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = () => {
    return (
        <Navbar expand="lg" className="bg-secondary m-3 rounded">
            <Container>
                <Navbar.Brand href="#home"><h2 className="text-primary"> <span><i className="bi bi-shop"></i> Global Service Provider</span></h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
                        <Nav.Link href="#menu" className="fw-bold">Services</Nav.Link>
                        <Nav.Link href="#musttry" className="fw-bold">About Us</Nav.Link>
                        <Nav.Link href="#contactus" className="fw-bold">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppBar
