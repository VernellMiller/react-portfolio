import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

// import { Nav, Navbar, Container } from "bootstrap";

const Navigation = (props) => {
    return (
        <Navbar className="shadow-sm p-3 mb-5 bg-body rounded fixed-top" collapseOnSelect expand="md">
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

        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <div class="container-fluid">
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNav">
        //             <ul class="navbar-nav">
        //                 <li class="nav-item">
        //                     <Link class="text-decoration-none" id="link" to="/">Home</Link>
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link class="text-decoration-none" id="link" to="portfolio">Portfolio</Link>
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link class="text-decoration-none" id="link" to="resume">Resume</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default Navigation;