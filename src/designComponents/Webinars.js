import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css-components/WebinarTypesStyles.css";

export default function Webinars() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://35.192.231.16/momscradle-web-api/api/webinar-type/published
      `
      )
      .then((response) => {
        if (response.data.Status) {
          setAPIData(response.data.Object.WebinarTypeList);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  // console.log(APIData);
  const arr = [];

  function webinarList() {
    APIData.forEach((data, i) => {
      var x = (
        <Card className="cardClassWebinars" key={i}>
          <Link className="anchorTitle" to={`/webinar/${data.Id}`}>
            {data.Title}{" "}
          </Link>
        </Card>
      );
      arr.push(x);
    });
    return arr;
  }

  return <Container>{webinarList()}</Container>;
}
