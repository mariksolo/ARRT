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
  Container
} from "react-bootstrap";

export class step2 extends Component {
  async componentDidMount() {
    let information = await getCriticalInfo(this.props.drug);
    // console.log(JSON.parse(info));

    // info = await info.json();
    this.setState({ info: information }); //I have to make this so that it logs arrays within info
    let interaction = await getInteractions(this.props.drug);
    console.log(interaction);
    this.setState({ interactions: interaction });
  }

  state = {
    info: [],
    interactions: []
  };

  render() {
    return (
      <Container className="pageContainer">
        <div className="Step2">
          <h1 className="StepHeader headerColors">Warnings</h1>

          <Row>
            <Col md={6}>
              <h5 className="headerColors">Do Not Use</h5>
              <p>{this.state.info.do_not_use}</p>
            </Col>

            <Col md={6}>
              <h5 className="headerColors">Ask Doctor</h5>
              <p>{this.state.info.ask_doctor}</p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5 className="headerColors">Ask Pharmacist</h5>
              <p>{this.state.info.ask_doctor_or_pharmacist}</p>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default step2;
