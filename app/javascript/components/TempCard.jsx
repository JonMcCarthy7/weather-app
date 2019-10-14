import React, { Component } from "react";
import {
  Card,
  Col,
  Button,
  ButtonToolbar,
  Row,
  ButtonGroup
} from "react-bootstrap";

export default class TempCard extends Component {
  state = {
    weather: this.props.weather,
    temp: ""
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.weather !== prevProps.weather) {
      this.setState({
        weather: this.props.weather,
        temp: this.props.weather.fahrenheit
      });
    }
  }

  setCurrentTempUnit = unit => {
    switch (unit) {
      case "C":
        this.setState({ temp: this.state.weather.celcius });
        break;
      case "K":
        this.setState({ temp: this.state.weather.main.temp });
        break;
      case "F":
        this.setState({ temp: this.state.weather.fahrenheit });
        break;
      default:
        break;
    }
  };

  render() {
    let weather = this.props.weather;
    if (weather) {
      return (
        <Col>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title className="mb-3">{weather.name}</Card.Title>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Card.Title>TEMP: {this.state.temp}°</Card.Title>
                  <ButtonToolbar size="sm">
                    <Button
                      onClick={() => this.setCurrentTempUnit("F")}
                      variant="secondary"
                    >
                      F
                    </Button>
                    <Button
                      onClick={() => this.setCurrentTempUnit("C")}
                      variant="secondary"
                    >
                      C
                    </Button>
                    <Button
                      onClick={() => this.setCurrentTempUnit("K")}
                      variant="secondary"
                    >
                      K
                    </Button>
                  </ButtonToolbar>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Title className="mt-3">
                    Avg: {weather.average_in_f}°F | High: {weather.temp_max}°F |
                    Low: {weather.temp_min}°F
                  </Card.Title>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="d-flex flex-column">
                    <ButtonGroup size="sm" className="mt-3">
                      <Button onClick={this.props.refresh}>Refresh</Button>
                      <Button onClick={this.props.saveLocation}>Save</Button>
                    </ButtonGroup>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    return null;
  }
}
