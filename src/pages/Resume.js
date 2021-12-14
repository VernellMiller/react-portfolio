import React from "react";
import "../index.css";
import { Container, Row, Image, Col } from "react-bootstrap";

const Resume = (props) => {    
    return(
        <>
            <div id="#resume" class="container">
                <div id="portfolio" class="text-start">
                    <h1 id="resume">My Resume</h1>
                </div>
                <Row>
                    <Col>
                        <Image id="resume" src="/plain-01-01.png" alt="resume page 1" width="700px"/>
                    </Col>
                    <Col>
                        <Image id="resume" src="/plain-01-02.png" alt="resume page 1" width="700px"/>
                    </Col>
                </Row>
                <a class="text-decoration-none" href="https://github.com/VernellMiller/Design-Resume/raw/main/RESUME_Vernell_Miller.pdf">
                    <p>Click to download</p>
                </a>
            </div>
        </>
    );
};

export default Resume;