import React from "react";
import "../index.css";
import { Container, Row, Image, Col } from "react-bootstrap";

const Resume = (props) => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <Image id="resume" src="/plain-01-01.png" alt="resume page 1" width="700px"/>
                </Col>
                <Col>
                    <Image id="resume" src="/plain-01-02.png" alt="resume page 1" width="700px"/>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Resume;