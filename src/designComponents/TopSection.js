import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css-components/WebinarTypesStyles.css";

export default function TopSection() {
  return (
    <Container>
      <Row>
        <Col className="column">University of California, San Francisco</Col>
      </Row>
      <Row>
        <Col>
          <hr></hr>
        </Col>
      </Row>
    </Container>
  );
}
