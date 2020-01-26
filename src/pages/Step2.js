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
          <Col>
            <h1 className="StepHeader headerColors">
              Warnings and Maintenance
            </h1>
            <h5>{this.state.info.when_using}</h5>
            <br />

            <h3 className="headerColors">Do Not Use</h3>
            <p>{this.state.info.do_not_use}</p>

            <h3 className="headerColors">Ask Doctor</h3>
            <p>{this.state.info.ask_doctor}</p>

            <h3 className="headerColors">Ask Pharmacist</h3>
            <p>{this.state.info.ask_doctor_or_pharmacist}</p>

            <h1>Proper Usage and Maintenance</h1>
            {/* <h3>Dosage and Administration</h3> */}
            
            <h3>Dosage and Administration</h3>
            <p>{this.state.info.dosage_and_administration}</p>


          </Col>
        </div>
      </Container>
    );
  }
}

export default step2;
