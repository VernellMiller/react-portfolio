import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = (props) => {
    return (
        <Navbar className="shadow-sm p-3 mb-5 bg-body rounded fixed-top" collapseOnSelect expand="md">
            <Container>
                <Navbar.Brand>Vernell</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <a class="text-decoration-none" id="link" href="#Home">Home</a>
                        <a class="text-decoration-none" id="link" href="#portfolio">Portfolio</a>
                        <Link class="text-decoration-none" id="link" to="resume">Resume</Link>
                    </Nav>
                    <Nav>
                        <a
                            className="text-decoration-none" href="mailto:vernellmiller1@gmailcom">

                            <div id="contact" className="rounded">
                            Contact Me
                            </div>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;