import React from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import TopSection from "./TopSection";
import "../css-components/WebinarTypesStyles.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WebinarDetails() {
  const { category } = useParams();
  //   console.log(category);
  const [WebinarIdData, setWebinarIdData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://35.192.231.16/momscradle-web-api/api/webinar/published/${category}

      `
      )
      .then((response) => {
        if (response.data.Status) {
          setWebinarIdData(response.data.Object.webinar);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, [category]);
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  //   console.log(WebinarIdData);
  function apiCallByWebinarId() {
    var x = (
      <Card
        style={{ width: "auto", borderBottom: "none" }}
        className="cardClassWebinars"
      >
        <Card.Body>
          <Card.Title className="cardTitle">{WebinarIdData.Title}</Card.Title>
          <Card.Text>{WebinarIdData.Description}</Card.Text>
          <Card.Text className="cardText">Webinar Details</Card.Text>
          <Card.Text>
            Starts on {WebinarIdData.Weekday},{" "}
            {new Date(WebinarIdData.StartDate).toLocaleDateString(
              "en-US",
              options
            )}{" "}
            at {WebinarIdData.StartTime} till {WebinarIdData.EndTime}
          </Card.Text>
          <Card.Text className="cardText">Speaker Details</Card.Text>
          <Card.Text>{WebinarIdData.SpeakerName}</Card.Text>
          <Card.Text className="mb-5">{WebinarIdData.SpeakerBio}</Card.Text>
          <Card.Text>Click here to download webinar flyer.</Card.Text>
        </Card.Body>
      </Card>
    );
    return x;
  }
  return (
    <Container>
      <TopSection></TopSection>
      <Row>
        <Col sm={12} md={6} lg={6}>
          {apiCallByWebinarId()}
        </Col>
        <Col sm={12} md={6} lg={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
