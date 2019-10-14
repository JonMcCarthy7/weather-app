import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default class SavedZipCodes extends Component {
  renderList = () => {
    let zipCodes = this.props.savedZipCodes;
    if (zipCodes.length) {
      return zipCodes.map(el => (
        <ListGroup.Item
          variant="dark"
          style={{ cursor: "pointer" }}
          onClick={() => this.props.handleClick(el.zip_code)}
          key={el.id}
        >
          {el.zip_code}
        </ListGroup.Item>
      ));
    }
    return null;
  };

  render() {
    return <ListGroup>{this.renderList()}</ListGroup>;
  }
}
