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
import "../leap.mediumra.re/assets/css/theme.min.css";
import "../index.css";

export class step1 extends Component {
  constructor(props) {
    super(props);
    this.state = { info: {}, interactions: [] };
  }
  async componentDidMount() {
    let information = await getCriticalInfo("ibuprofen");
   
    this.setState({ info: information }); 
    let interaction = await getInteractions("ibuprofen");
    interaction = interaction.slice(0, 10);
    
    this.setState({ interactions: interaction });
    console.log(information);
  }

 

  render() {
    return (
      <Container>
        <div>
          <div className="col">
            <h2>Ibuprofen</h2>
            <div className="" data-isotope-collection>
              <div data-isotope-item className="col-4">
                <div className="card bg-primary min-vh-5"><p className="lead StepText">Substance Name: {this.state.info.substance_name}</p></div>
              </div>
              <div data-isotope-item className="col-4">
                <div className="card bg-primary min-vh-5"><p className="lead StepText">Generic Name: {this.state.info.generic_name}</p></div>
              </div>
              <div data-isotope-item className="col-4">
                <div className="card bg-primary min-vh-5"><p className="lead StepText">Route : {this.state.info.route}</p></div>
              </div>
              
            </div>
          </div>
          
        </div>
      </Container>
    );
  }
}

export default step1;
