import React, { Component, useState, Render, onDocumentLoadSuccess } from "react";
import "../index.css";
import { Container, Row, Image, Col } from "react-bootstrap";
import { Document, Page } from "react-pdf";

const Resume = (props) => {
    // state = {
    //     numPages: null,
    //     pageNumber: 1,
    //   };
    
    //   onDocumentLoadSuccess = ({ numPages }) => {
    //     this.setState({ numPages });
    //   };

    //   render() {
    //     const { pageNumber, numPages } = this.state;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    
    
        return(
            <>
                {/* <Container>
                    <Row>
                        <Col>
                            <Image id="resume" src="/plain-01-01.png" alt="resume page 1" width="700px"/>
                        </Col>
                        <Col>
                            <Image id="resume" src="/plain-01-02.png" alt="resume page 1" width="700px"/>
                        </Col>
                    </Row>
                </Container> */}

                <div>
                    <Document
                        file="resume.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                        >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                </div>
            </>
        );
    // };
};

export default Resume;