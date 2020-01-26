import React, { Component } from "react";

import getCriticalInfo from "../api/getCriticalInfo";
import getInteractions from "../api/getInteractions";
import { findByLabelText } from "@testing-library/react";
import {
  ListGroup,
  Col,
  Row,
  Accordion,
  Card,
  Button,
  Container,
  Form
} from "react-bootstrap";

export class ReportingTool extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target)
  }
  render() {
    return (
      <Container className="pageContainer">
        <div className="ReportingTool">
          <h1>Reporting Tool</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default ReportingTool;
