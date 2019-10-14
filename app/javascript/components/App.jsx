import React, { Component } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import TempCard from "./TempCard";
import SavedZipCodes from "./SavedZipCodes";
import axios from "axios";

export default class App extends Component {
  state = {
    title: "WeatherApp",
    zipCode: "",
    weather: null,
    savedZipCodes: []
  };

  componentDidMount = () => {
    this.getAllZipCodes();
  };

  getAllZipCodes = () => {
    let result = axios.get(`/weathers`);
    result
      .then(res => {
        this.setState({ savedZipCodes: res.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  getZipCode = zipCode => {
    this.setState({ zipCode });
  };

  handleSubmit = () => {
    if (this.state.zipCode.length > 4) {
      let result = axios.get(`/open_weathers?zip=${this.state.zipCode}`);
      result
        .then(res => {
          this.setState({ weather: res.data });
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  saveLocation = () => {
    if (this.state.zipCode) {
      let result = axios.post("/weathers", {
        weather: { zip_code: this.state.zipCode }
      });
      result
        .then(res => {
          this.setState({
            savedZipCodes: [res.data, ...this.state.savedZipCodes]
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  renderSavedZipCodes = () => {
    if (this.state.savedZipCodes.length) {
      return <SavedZipCodes savedZipCodes={this.state.savedZipCodes} />;
    }
    return null;
  };

  handleClick = zipCode => {
    this.setState({ zipCode });
  };

  renderTempCard = () => {
    if (this.state.weather) {
      return (
        <TempCard
          weather={this.state.weather}
          saveLocation={this.saveLocation}
          refresh={this.refresh}
        />
      );
    }
    return (
      <Col>
        <h3>Enter a zip code to get the current weather</h3>
      </Col>
    );
  };

  refresh = () => this.handleSubmit();

  handleMouseEnter = () => this.setState({ title: "Hire Me?" });

  handleMouseLeave = () => this.setState({ title: "WeatherApp" });

  render() {
    return (
      <>
        <Navbar
          expand="lg"
          variant="dark"
          bg="dark"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <Navbar.Brand>{this.state.title}</Navbar.Brand>
        </Navbar>
        <Container>
          <SearchBar
            zipCode={this.state.zipCode}
            getZipCode={this.getZipCode}
            handleSubmit={this.handleSubmit}
          />
          <Row>
            <SavedZipCodes
              handleClick={this.handleClick}
              savedZipCodes={this.state.savedZipCodes}
            />
            {this.renderTempCard()}
          </Row>
        </Container>
      </>
    );
  }
}
