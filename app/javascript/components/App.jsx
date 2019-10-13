import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";
import SearchBar from "./SearchBar";
import TempCard from "./TempCard";
import SavedZipCodes from "./SavedZipCodes";
import axios from "axios";

export default class App extends Component {
  state = {
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
        console.log(res);
        this.setState({ savedZipCodes: res.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  getZipCode = zipCode => {
    console.log(zipCode);
    this.setState({ zipCode });
  };

  handleSubmit = () => {
    if (this.state.zipCode.length > 4) {
      let result = axios.get(`/open_weathers?zip=${this.state.zipCode}`);
      result
        .then(res => {
          console.log("RESULT", res);
          this.setState({ weather: res.data });
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  saveLocation = () => {
    console.log("Clicked");
    if (this.state.zipCode) {
      let result = axios.post("/weathers", {
        weather: { zip_code: this.state.zipCode }
      });
      result
        .then(res => {
          console.log("RESULT SAVED", res);
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

  render() {
    return (
      <Container>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand>
            <strong>Hire</strong>Me
          </Navbar.Brand>
        </Navbar>
        <SearchBar
          getZipCode={this.getZipCode}
          handleSubmit={this.handleSubmit}
        />
        <TempCard
          weather={this.state.weather}
          saveLocation={this.saveLocation}
        />
        {/* {this.renderSavedZipCodes} */}
        <SavedZipCodes savedZipCodes={this.state.savedZipCodes} />
      </Container>
    );
  }
}
