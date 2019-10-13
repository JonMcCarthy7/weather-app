import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

export default class TempCard extends Component {
  render() {
    let weather = this.props.weather;
    if (weather) {
      return (
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{weather.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>{weather.main.temp}</Card.Text>
                <Card.Link
                  style={{ cursor: "pointer" }}
                  onClick={this.props.saveLocation}
                >
                  Save Location
                </Card.Link>
                <Card.Link style={{ cursor: "pointer" }}>
                  Another Link
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
    }
    return null;
  }
}
