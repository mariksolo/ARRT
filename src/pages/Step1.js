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

export class step1 extends Component {
  constructor(props) {
    super(props);
    this.state = { info: {}, interactions: [] };
  }
  async componentDidMount() {
    let information = await getCriticalInfo(this.props.drug);
    // console.log(JSON.parse(info));

    // info = await info.json();
    this.setState({ info: information }); //I have to make this so that it logs arrays within info
    let interaction = await getInteractions(this.props.drug);
    interaction = interaction.slice(0, 10);
    // console.log(interaction);
    this.setState({ interactions: interaction });
    console.log(information);
  }

  // state = {
  //     info: [],
  //     interactions: []
  // };

  render() {
    return (
      <Container className="pageContainer">
        <div className="Step1">
          <Col>
            <h1 className="stepHeader">General Information</h1>

            <p>Generic Name: {this.state.info.generic_name}</p>
            <p>Substance Name: {this.state.info.substance_name}</p>
            <p>Route: {this.state.info.route}</p>

            <h3>Purpose</h3>
            <p>{this.state.info.purpose}</p>
            {/* </Row>
            <Row className="Usage"> */}
            <h3>Indications and Usage</h3>
            <p>{this.state.info.indications_and_usage}</p>
            <h3>Product Type</h3>
            <p>{this.state.info.product_type}</p>
            {/* </Row> */}

            <h3>Substance Interactions</h3>
            <ListGroup>
              {this.state.interactions.map(drug => (
                <ListGroup.Item>{drug}</ListGroup.Item>
              ))}
              {/* <ListGroup.Item>Hi</ListGroup.Item> */}
            </ListGroup>
            <h3>Warnings</h3>
            <p>{this.state.info.warnings}</p>
          </Col>
        </div>
      </Container>
    );
  }
}

export default step1;
