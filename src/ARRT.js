import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/bootstrap.css";
import "./styles/main.css"
import getInteractions from "./api/getInteractions";
import getCriticalInfo from "./api/getCriticalInfo";
import LandingPage from "./LandingPage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import { useParams } from "react-router-dom";
import { Container, Jumbotron, Tabs, Tab, TabPane } from "react-bootstrap";

class ARRT extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drug: "" };
  }
  async componentDidMount() {
    const { drug } = this.props.match.params;
    // let info = await getCriticalInfo(drug);
    // console.log(drug);
    // let interactions = await getInteractions(drug);
    // console.log(info);
    // console.log(interactions);
    this.setState({ drug: drug });
    console.log("drug::");
    console.log(this.props.match.params.drug);
  }
  render() {
    return (
      <div>
        <header className="shortNav">
          <div className="container pt-4">
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-0">
              <a className="text-white navbar-brand" href="/">
                ARRT
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#da-navbarNav"
                aria-controls="da-navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse text-uppercase"
                id="da-navbarNav"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link smooth-scroll"
                      href="https://github.com/Anan1218/healthhacks"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <div className="page-content">
          <div>
            <div className="da-section da-work bg-secondary" id="learn">
              <div className="container">
                {/* <Container className="pageContainer"> */}
              
                
                  <Tabs defaultActiveKey="step1" variant="pills">
                    <Tab eventKey="step1" title="Step 1">
                      <Step1 drug={this.props.match.params.drug} />
                    </Tab>
                    <Tab eventKey="step2" title="Step 2">
                      <Step2 drug={this.props.match.params.drug} />
                    </Tab>
                    <Tab eventKey="step3" title="Step 3">
                      <Step3 drug={this.props.match.params.drug} />
                    </Tab>
                  </Tabs>
                
                {/* </Container> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ARRT;
