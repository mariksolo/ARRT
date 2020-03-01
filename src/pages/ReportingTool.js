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

import firebase from "firebase";

export class ReportingTool extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}
    handleSubmit = event => {
        event.preventDefault();

        var firebaseConfig = {
            apiKey: "AIzaSyBcn-5v35vP2kSRDdfec7MEanQPMfO48fQ",
            authDomain: "arrtdatabase.firebaseapp.com",
            databaseURL: "https://arrtdatabase.firebaseio.com",
            projectId: "arrtdatabase",
            storageBucket: "arrtdatabase.appspot.com",
            messagingSenderId: "479769423414",
            appId: "1:479769423414:web:e4f87b5350859e56103297"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        // Initialize Firebase
        // firebase.initializeApp(firebaseConfig);
        // firebase.analytics();
        var db = firebase.firestore();

        this.setState({
            interactions: [...this.state.interactions, this.state.drug1]
        });

        this.setState({
            interactions: [...this.state.interactions, this.state.drug2]
        });

        console.log(this.state);

        db.collection("reports")
            .add({
                drug1: this.state.drug1,
                drug2: this.state.drug2,
                interactions: this.state.interactions
                // penis: "penis"
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
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
