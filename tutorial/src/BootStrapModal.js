import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
export default class BootStrapModal extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Click to Show</Button>
        <Modal show={this.state.show} onHide={this.handleClick}>
          <Modal.Header closeButton>Hi</Modal.Header>
          <Modal.Body>This is body</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClick}>Close</Button>
            <Button onClick={this.handleClick}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
