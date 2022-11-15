import React from "react";
import TopSection from "./TopSection";
import { Container, Row, Col } from "react-bootstrap";
import "../css-components/WebinarTypesStyles.css";
import Webinars from "./Webinars";
import WebinarTypeIdApiCall from "./WebinarTypeIdApiCall";
import { useParams } from "react-router-dom";

export default function FirstWebinar() {
  const { id } = useParams();
  return (
    <Container>
      <TopSection></TopSection>
      <Row>
        <Col sm={12} md={3} lg={3}>
          <Webinars></Webinars>
        </Col>
        <Col sm={12} md={9} lg={9}>
          <WebinarTypeIdApiCall id={id}></WebinarTypeIdApiCall>
        </Col>
      </Row>
    </Container>
  );
}
