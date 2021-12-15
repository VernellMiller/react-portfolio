import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = (props) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar className="shadow-sm p-3 mb-5 bg-body rounded fixed-top" collapseOnSelect expand="md" expanded={expanded}>
            <Container>
                <Navbar.Brand>Vernell</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <a class="text-decoration-none" id="link" href="#Home" onClick={() => setExpanded(false)}>Intro</a>
                        <a class="text-decoration-none" id="link" href="#portfolio" onClick={() => setExpanded(false)}>Portfolio</a>
                        <a class="text-decoration-none" id="link" href="#resume" onClick={() => setExpanded(false)}>Resume</a>
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