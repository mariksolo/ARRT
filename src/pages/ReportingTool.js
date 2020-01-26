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
    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            interactions: [...this.state.interactions, this.state.drug1]
        });

        this.setState({
            interactions: [...this.state.interactions, this.state.drug2]
        });

        console.log(this.state);
    };

    state = {
        interactions: [],
        drug1: "",
        drug2: ""
    };

    onChange1 = e => this.setState({ drug1: e.target.value });
    onChange2 = e => this.setState({ drug2: e.target.value });

    render() {
        return (
            <Container className="pageContainer">
                <div className="ReportingTool">
                    <h1>Reporting Tool</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>
                                Enter Your Two Conflicting Drugs
                            </Form.Label>
                            <Form.Control
                                value={this.state.drug1}
                                placeholder="Enter Drug1"
                                onChange={this.onChange1}
                            />
                            <Form.Control
                                value={this.state.drug2}
                                placeholder="Enter Drug2"
                                onChange={this.onChange2}
                            />
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
