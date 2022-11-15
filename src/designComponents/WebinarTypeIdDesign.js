import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "../css-components/WebinarTypesStyles.css";
import { Link } from "react-router-dom";

export default function WebinarTypeIdDesign(props) {
  const { ApiById } = props;
  const arr = [];
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  console.log(ApiById.length);
  function apiCallById() {
    ApiById.forEach((data, i) => {
      var x = (
        <Card style={{ width: "auto" }} className="cardClassWebinars" key={i}>
          <Card.Body>
            <Link to={"/webinars/" + data.Id} className="anchorTitle">
              <Card.Title className="cardTitle mb-4">{data.Title}</Card.Title>
            </Link>
            <Card.Text className="mb-2">{data.Description}</Card.Text>
            <Card.Text className="cardText">
              Starts on {data.Weekday},{" "}
              {new Date(data.StartDate).toLocaleDateString("en-US", options)} at{" "}
              {data.StartTime} till {data.EndTime}
            </Card.Text>
            <Card.Text>Click here to download webinar flyer.</Card.Text>

            <Link to={"/webinars/" + data.Id}>
              <Button variant="primary">Sign Up</Button>{" "}
            </Link>
          </Card.Body>
        </Card>
      );
      arr.push(x);
    });
    return arr;
  }
  return <Container>{ApiById.length > 0 ? apiCallById() : 'No Webinar Available!'}</Container>;
}
