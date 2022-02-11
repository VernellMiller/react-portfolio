import React from "react";
import "../index.css";
import { Row, Image, Col } from "react-bootstrap";

const Resume = (props) => {    
    return(
        <>
            <div id="#resume" class="container">
                <h1 id="resume">Developer Resume</h1>
                    <a class="text-decoration-none fs-3" href="https://github.com/VernellMiller/Design-Resume/raw/main/Vernell_Miller_Resume.pdf">
                        <Image id="devresume" src="/devResume.png" alt="resume page 1" width="700px"/>
                    </a>
                <a class="text-decoration-none fs-3" href="https://github.com/VernellMiller/Design-Resume/raw/main/Vernell_Miller_Resume.pdf">
                    <p>Click to download</p>
                </a>
                <h1 id="resume">Design Resume</h1>
                <Row>
                    <Col>
                        <a class="text-decoration-none fs-3" href="https://github.com/VernellMiller/Design-Resume/raw/main/designResume.pdf">
                            <Image id="resume" src="/plain-01-01.png" alt="resume page 1" width="700px"/>
                        </a>
                    </Col>
                    <Col>
                        <a class="text-decoration-none fs-3" href="https://github.com/VernellMiller/Design-Resume/raw/main/designResume.pdf">
                            <Image id="resume" src="/plain-01-02.png" alt="resume page 1" width="700px"/>
                        </a>
                    </Col>
                </Row>
                <a class="text-decoration-none fs-3" href="https://github.com/VernellMiller/Design-Resume/raw/main/designResume.pdf">
                    <p>Click to download</p>
                </a>
            </div>
        </>
    );
};

export default Resume;