import { Col, Row, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css-components/WebinarTypesStyles.css";
import TopSection from "./TopSection";

function WebinarTypes(props) {
  var { apiData } = props;
  const arr = [];

  function webinarLists() {
    apiData.forEach((data, i) => {
      var x = (
        <Col sm={12} md={6} lg={4} key={data.Id}>
          <Card className="cardClass">
            <Card.Body>
              <Link to={`/webinar/${data.Id}`} className="anchorTitle">
                <Card.Title className="cardTitle">{data.Title}</Card.Title>
              </Link>
              <Card.Text>{data.Description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
      arr.push(x);
    });
    return arr;
  }

  return (
    <Container>
      <TopSection></TopSection>
      <Row>{webinarLists()}</Row>
    </Container>
  );
}

export default WebinarTypes;
