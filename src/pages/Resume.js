import React from "react";
import "../index.css";
import { Row, Image, Col } from "react-bootstrap";

const Resume = (props) => {    
    return(
        <>
            <div id="#resume" class="container">
                <h1 id="resume">Developer Resume</h1>
                    <a class="text-decoration-none fs-3" href="https://github.com/VernellMiller/Design-Resume/raw/main/devResume.pdf">
                        <Image id="devresume" src="/devResume.png" alt="resume page 1" width="700px"/>
                    </a>
                <a class="text-decoration-none fs-3" href="https://github.com/VernellMiller/Design-Resume/raw/main/devResume.pdf">
                    <p>Click to download</p>
                </a>
                <h1 id="resume">Design Resume</h1>
                <Row>
                    <Col>
                        <Image id="resume" src="/plain-01-01.png" alt="resume page 1" width="700px"/>
                    </Col>
                    <Col>
                        <Image id="resume" src="/plain-01-02.png" alt="resume page 1" width="700px"/>
                    </Col>
                </Row>
                <a class="text-decoration-none fs-3" href="https://github.com/VernellMiller/Design-Resume/raw/main/RESUME_Vernell_Miller.pdf">
                    <p>Click to download</p>
                </a>
            </div>
        </>
    );
};

export default Resume;