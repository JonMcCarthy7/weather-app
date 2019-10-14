import React, { Component } from "react";
import { Row, InputGroup, FormControl, Button, Form } from "react-bootstrap";

export default class SearchBar extends Component {
  render() {
    return (
      <Row>
        <InputGroup className="mt-3 mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>ZipCode</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder={"e.g. 12345"}
            value={this.props.zipCode}
            aria-label="zip_code"
            onChange={e => this.props.getZipCode(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant="secondary" onClick={this.props.handleSubmit}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Row>
    );
  }
}
