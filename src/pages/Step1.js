import React, { Component } from "react";

import getCriticalInfo from "../api/getCriticalInfo";
import getInteractions from "../api/getInteractions";
import { findByLabelText } from "@testing-library/react";
import { ListGroup, Col, Row, Accordion, Card, Button, Container } from "react-bootstrap";

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
        <h1 className="StepHeader">Basic Drug Profile</h1>

        <Row>
          <Col md={3}>
            <Accordion defaultActiveKey="0">
              <Card>
                {/* <Card.Header> */}
                  <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                    Active Ingredient
                  </Accordion.Toggle>
                {/* </Card.Header> */}
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>{this.state.info.active_ingredient}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                {/* <Card.Header> */}
                  <Accordion.Toggle as={Button} variant="secondary" eventKey="1">
                    Generic Name
                  </Accordion.Toggle>
                {/* </Card.Header> */}
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p>{this.state.info.generic_name}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                {/* <Card.Header> */}
                  <Accordion.Toggle as={Button} variant="info" eventKey="2">
                    Route
                  </Accordion.Toggle>
                {/* </Card.Header> */}
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p>{this.state.info.route}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                {/* <Card.Header> */}
                  <Accordion.Toggle as={Button} variant="dark" eventKey="3">
                    Substance Name
                  </Accordion.Toggle>
                {/* </Card.Header> */}
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p>{this.state.info.substance_name}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>

          <Col md={5}>
            {/* <Row> */}
              <h5>Purpose</h5>
              <p>{this.state.info.purpose}</p>
            {/* </Row>
            <Row className="Usage"> */}
              <h5>Indications and Usage</h5>
              <p>{this.state.info.indications_and_usage}</p>
              <h5>Product Type</h5>
              <p>{this.state.info.product_type}</p>
            {/* </Row> */}
          </Col>
          <Col md={4} className="Interactions">
            <h5>Substance Interactions</h5>
            <ListGroup>
              {this.state.interactions.map(drug => (
                <ListGroup.Item>{drug}</ListGroup.Item>
              ))}
              {/* <ListGroup.Item>Hi</ListGroup.Item> */}
            </ListGroup>
          </Col>
        </Row>
        <Row md={2}>
            <h5>Warnings</h5>
            <p>{this.state.info.warnings}</p>
        </Row>
      </div>
      </Container>
    );
  }
}

export default step1;
