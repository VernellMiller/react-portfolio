import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";

const Navigation = (props) => {
    return (
        <Navbar collapseOnSelect expand="md">
            <Container>
                <Navbar.Brand>Vernell</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link class="text-decoration-none" id="link" to="/">Home</Link>
                        <Link class="text-decoration-none" id="link" to="portfolio">Portfolio</Link>
                        <Link class="text-decoration-none" id="link" to="resume">Resume</Link>
                    </Nav>
                    <Nav>
                        <Button id="contact">Contact Me</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;