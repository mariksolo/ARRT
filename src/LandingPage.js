import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import getInteractions from "./api/getInteractions";
import getCriticalInfo from "./api/getCriticalInfo";
import LandingPagePhoto from "./LandingPagePhoto.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import "./js/aos";
import "./css/ekko-lightbox.css";
import "./styles/bootstrap.css";
import "./styles/main.css";
import { ReactComponent as FrontPageSVG } from './undraw_medicine_b1ol.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ARRT from "./ARRT";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.drugInput = React.createRef();
    this.state = { redirect: false, redirectTo: "" };
  }

  handleSubmit = event => {
    // event.preventDefault();
    // event.stopPropagation();

    // alert(this.drugInput.current.value)
    this.setState({
      redirectTo: this.drugInput.current.value,
      redirect: true
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={"/app/" + this.state.redirectTo} />;
    } else {
      return (
        <div>
          <header>
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
            <div
              className="da-home-page-text"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="container">
                <div className="col-md-10 col-sm-12 px-0 mx-0">
                  <h2 className="display-3" style={{ "margin-left": "-6px" }}>
                    Adverse Reaction Reporting Tool
                  </h2>
                  <h3 className="h5 mt-3">
                    Get critical FDA data about over-the-counter and
                    prescription drugs in real time
                  </h3>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                      {/* <Form.Group controlId="formBasicEmail"> */}
                      <Col>
                        <Form.Control
                          type="search"
                          placeholder="Enter drug name"
                          ref={this.drugInput}
                          // onChange={() => { this.setState({drug: this.textInput.current.value}) }}
                        />
                        {/* </Form.Group> */}
                      </Col>
                      <Col>
                        <Button variant="outline-dark" type="submit">
                          Submit
                        </Button>
                      </Col>
                    </Form.Row>
                  </Form>

                  {/* <a
                  className="smooth-scroll btn btn-outline-light mt-4"
                  href="#learn"
                >
                  Learn More
                </a> */}
                </div>
              </div>
            </div>
          </header>
          <div className="da-section bg-dark">
          <Container className="svgContainer"> <Row ><FrontPageSVG /></Row></Container>
              
          </div>
          <div className="da-section bg-light" id="services">
            <div className="da-services">
              <div className="container text-center">
                <div className="h3 pb-5 text-center" data-aos="fade-up">
                  What Are Adverse Drug Reactions?
                </div>
                <p>An adverse drug reaction (ADR) is an injury caused by taking medication.</p>
                <p>Adverse drug reactions occur in 10 to 20% of hospitalizations, many of which are severe.</p>
                <p className="px-5 pb-5 text-center"
                    data-aos="fade-up"> Previous research at Alder Hey found that three out of every 100 children admitted to hospital experience an adverse reaction due to a medicine taken at home. 22% of these ADRs might have been avoidable. Below are 4 examples of common OTC medications that can cause ADRs.</p>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="card mb-3">
                      <div
                        className="card-body py-5"
                        data-aos="zoom-in"
                        data-aos-duration="500"
                      >
                        <div className="text-primary">
                          {/* <i className="pb-3 fas fa-code fa-3x"></i> */}
                          <p className="font-weight-bold">Ibuprofen</p>
                        </div>
                        <p>
                          Temporarily relieves minor aches and pains and reduces
                          fever.
                        </p>
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="card mb-3">
                      <div
                        className="card-body py-5"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                      >
                        <div className="text-primary">
                          {/* <i className="pb-3 fab fa-buromobelexperte fa-3x"></i> */}
                          <p className="font-weight-bold">Tylenol</p>
                        </div>
                        <p>
                          Temporarily relieves minor aches and pains and reduces
                          fever.
                        </p>
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="card mb-3">
                      <div
                        className="card-body py-5"
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                      >
                        <div className="text-primary">
                          {/* <i className="pb-3 fas fa-cubes fa-3x"></i> */}
                          <p className="font-weight-bold">Aspirin</p>
                        </div>
                        <p>
                          For the temporary relief of minor aches and pains or
                          as recommended by your doctor.
                        </p>
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="card mb-3">
                      <div
                        className="card-body py-5"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                      >
                        <div className="text-primary">
                          {/* <i className="pb-3 fas fa-eye fa-3x"></i> */}
                          <p className="font-weight-bold">Zantac</p>
                        </div>
                        <p>
                          Relieves heartburn associated with acid indigestion
                          and sour stomach brought on by eating or drinking
                          certain foods and beverages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content">
            <div>
              <div className="da-section da-work bg-secondary" id="learn">
                <div className="container">
                  <div
                    className="h3 pb-3 text-center text-white"
                    data-aos="fade-up"
                  >
                    How does ARRT work?
                  </div>
                  <p
                    className="px-5 pb-5 text-center text-white"
                    data-aos="fade-up"
                  >
                    All of ARRT's data comes from openFDA, a public API
                    dedicated to saving lives maintaining accountability and
                    oppenness in the FDA. Given the name of a OTC or
                    prescription drug, ARRT searches the API for relevant data
                    and information on when, how, and why to use any drug.
                  </p>

                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-3" data-aos="flip-left">
                        <div className="card-body mt-4 mb-1 text-center">
                          <i className="pb-3 text-primary fas fa-briefcase fa-3x"></i>
                          <div className="h4 pb-3">Step 1</div>
                          <p>
                            Learn about drug use cases and possible adverse
                            reactions with other medications.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-3" data-aos="zoom-in-up">
                        <div className="card-body mt-4 mb-1 text-center">
                          <i className="pb-3 text-primary fas fa-sliders-h fa-3x"></i>
                          <div className="h4 pb-3">Step 2</div>
                          <p>
                            View warnings and situations when the drug should
                            not be taken.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-3" data-aos="flip-right">
                        <div className="card-body mt-4 mb-1 text-center">
                          <i className="pb-3 text-primary fas fa-trophy fa-3x"></i>
                          <div className="h4 pb-3">Step 3</div>
                          <p>
                            Understand proper dosage and administration of
                            medication.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p
                    className="px-5 pb-5 text-center text-white"
                    data-aos="fade-up"
                  >
                    Disclaimer: This information is a reference resource
                    designed as supplement to, and not a substitute for, the
                    expertise, skill , knowledge, and judgement of healthcare
                    practitioners in patient care. The absence of a warning for
                    a given drug or combination thereof in no way should be
                    construed to indicate safety, effectiveness, or
                    appropriateness for any given patient. ARRT does not assume
                    any responsibility for any aspect of healthcare administered
                    with the aid of materials provided. The information
                    contained herein is not intended to cover all possible uses,
                    directions, precautions, warnings, drug interactions,
                    allergic reactions, or adverse effects. If you have
                    questions about the substances you are taking, check with
                    your doctor, nurse, or pharmacist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const commonOTC = {
  "text-align": "left",
  color: "#ffffff"
  //   "background-color": "#ffffff",
};
const AppStyle = {
  "text-align": "center",
  "background-color": "#282c34",
  //   'background': {LandingPagePhoto},
  "min-height": "100vh",
  display: "flex",
  "flex-direction": "column",
  "align-items": "center",
  "justify-content": "center",
  "font-size": "calc(10px + 2vmin)",
  padding: "0px !important",
  margin: "0px"
  //   color: "white"
};

const ImageStyle = {
  // 'background': {LandingPagePhoto},
  margin: "0px !important",
  padding: "0px !important",
  "min-height": "50vh",
  width: "100vw",
  background:
    'rgba(0, 0, 0, 0) url("/static/media/LandingPagePhoto.eb704b8f.jpg") no-repeat scroll center center / cover'
};
// const MainPhotoStyle = {
//   width: "100vw",
//   padding: '0px',
//   margin: '0px',
// //   background: {LandingPagePhoto},
// //   background-color: '#cccccc'
// "background-color": "#282c34"
// };
export default LandingPage;
