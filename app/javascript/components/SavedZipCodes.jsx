import React, { Component } from "react";
import { Row, ListGroup } from "react-bootstrap";

export default class SavedZipCodes extends Component {
  renderList = () => {
    let zipCodes = this.props.savedZipCodes;
    if (zipCodes.length) {
      return zipCodes.map(el => (
        <ListGroup.Item key={el.id}>{el.zip_code}</ListGroup.Item>
      ));
    }
    return null;
  };

  render() {
    return (
      <Row>
        <ListGroup>{this.renderList()}</ListGroup>
      </Row>
    );
  }
}
