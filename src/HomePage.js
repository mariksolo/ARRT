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
// import "./css/ekko-lightbox.css";
// import "./styles/bootstrap.css";
// import "./styles/main.css";
import "./leap.mediumra.re/assets/css/theme.min.css";
// import "./leap.mediumra.re/assets/css/theme-mobile-app.min.css";
// import "./leap.mediumra.re/assets/css/theme-event.min.css";
// import "./leap.mediumra.re/assets/css/theme-course.min.css";
import searchIcon from "./leap.mediumra.re/assets/img/icons/theme/general/search.svg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="hello">
                <div class="loader">
                    <div class="loading-animation"></div>
                </div>

                <div class="navbar-container ">
                    <nav
                        class="navbar navbar-expand-lg justify-content-between navbar-light border-bottom-0 bg-white"
                        data-sticky="top"
                    >
                        <div class="container">
                            <div class="col flex-fill px-0 d-flex justify-content-between">
                                <a
                                    class="navbar-brand mr-0 fade-page"
                                    href="index.html"
                                >
                                    <p>ARRT</p>
                                </a>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <img
                                        class="icon navbar-toggler-open"
                                        src="assets/img/icons/interface/menu.svg"
                                        alt="menu interface icon"
                                        data-inject-svg
                                    />
                                    <img
                                        class="icon navbar-toggler-close"
                                        src="assets/img/icons/interface/cross.svg"
                                        alt="cross interface icon"
                                        data-inject-svg
                                    />
                                </button>
                            </div>

                            <div class="collapse navbar-collapse justify-content-end col flex-fill px-0">
                                <a
                                    href="https://themes.getbootstrap.com/product/leap-multipurpose-bootstrap-theme/"
                                    class="btn btn-primary ml-lg-3"
                                >
                                    GITHUB
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>

                <section class="has-divider">
                    <div class="container">
                        <div class="row align-items-center justify-content-between o-hidden">
                            <div
                                class="col-md-6 order-sm-2 mb-5 mb-sm-0"
                                data-aos="fade-left"
                            >
                                <img src="assets/img/saas-3.svg" alt="Image" />
                            </div>
                            <div class="col-md-6 pr-xl-5 order-sm-1">
                                <h1 class="display-4">
                                    Adverse Reaction Reporting Tool
                                </h1>
                                <p class="lead">
                                    Critical data about over-the-counter and
                                    prescription drugs straight from the FDA.
                                </p>
                                <form class="d-sm-flex mb-2 mt-4">
                                    <input
                                        type="email"
                                        class="form-control form-control-lg mr-sm-2 mb-2 mb-sm-0"
                                        placeholder="ex: Tylenol"
                                    />
                                    <button
                                        class="btn btn-lg btn-primary"
                                        type="submit"
                                    >
                                        Get Started
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="divider">
                        <img
                            class="bg-primary-alt"
                            src="assets/img/dividers/divider-1.svg"
                            alt="divider graphic"
                            data-inject-svg
                        />
                    </div>
                </section>
                <section class="bg-primary-alt">
                    <div class="container">
                        <div class="row mb-4">
                            <div class="col">
                                <h2 class="h1">How does ARRT work?</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div
                                class="col-md-4"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div class="card card-body">
                                    <div class="icon-round mb-3 mb-md-4 bg-primary">
                                        <img
                                            class="icon bg-primary"
                                            src="assets/img/icons/theme/communication/chat-check.svg"
                                            alt="icon"
                                            data-inject-svg
                                        />
                                    </div>
                                    <h4>Step 1</h4>
                                    <p>
                                        Learn about drug use cases and possible
                                        adverse reactions with other
                                        medications.
                                    </p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                            <div
                                class="col-md-4"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div class="card card-body">
                                    <div class="icon-round mb-3 mb-md-4 bg-primary">
                                        <img
                                            class="icon bg-primary"
                                            src="assets/img/icons/theme/shopping/wallet-3.svg"
                                            alt="icon"
                                            data-inject-svg
                                        />
                                    </div>
                                    <h4>Step 2</h4>
                                    <p>
                                        View warnings and situations when the
                                        drug should not be taken.
                                    </p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                            <div
                                class="col-md-4"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div class="card card-body">
                                    <div class="icon-round mb-3 mb-md-4 bg-primary">
                                        <img
                                            class="icon bg-primary"
                                            src="assets/img/icons/theme/food/sushi.svg"
                                            alt="icon"
                                            data-inject-svg
                                        />
                                    </div>
                                    <h4>Step 3</h4>
                                    <p>
                                        Understand proper dosage and
                                        administration of medication.
                                    </p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row justify-content-center text-center mb-6">
                            <div class="col-xl-8 col-lg-9">
                                <h2 class="display-4 mx-xl-6">
                                    Build it from the ground up.
                                </h2>
                                <p class="lead">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa.
                                </p>
                            </div>
                        </div>
                        <div class="row justify-content-center mb-5">
                            <div class="col-xl-11">
                                <ul
                                    class="nav justify-content-center"
                                    role="tablist"
                                >
                                    <li class="nav-item mx-1">
                                        <a
                                            class="nav-link active"
                                            href="#saas-tab-1"
                                            data-toggle="tab"
                                            role="tab"
                                            aria-controls="saas-tab-1"
                                            aria-selected="true"
                                        >
                                            <div class="icon-round icon-round-sm bg-primary">
                                                <img
                                                    class="icon bg-primary"
                                                    src="assets/img/icons/theme/shopping/box-2.svg"
                                                    alt="box-2 icon"
                                                    data-inject-svg
                                                />
                                            </div>
                                            Custom Dashboard
                                        </a>
                                    </li>
                                    <li class="nav-item mx-1">
                                        <a
                                            class="nav-link"
                                            href="#saas-tab-2"
                                            data-toggle="tab"
                                            role="tab"
                                            aria-controls="saas-tab-2"
                                            aria-selected="false"
                                        >
                                            <div class="icon-round icon-round-sm bg-primary">
                                                <img
                                                    class="icon bg-primary"
                                                    src="assets/img/icons/theme/shopping/chart-pie.svg"
                                                    alt="chart-pie icon"
                                                    data-inject-svg
                                                />
                                            </div>
                                            Smart Analytics
                                        </a>
                                    </li>
                                    <li class="nav-item mx-1">
                                        <a
                                            class="nav-link"
                                            href="#saas-tab-3"
                                            data-toggle="tab"
                                            role="tab"
                                            aria-controls="saas-tab-3"
                                            aria-selected="false"
                                        >
                                            <div class="icon-round icon-round-sm bg-primary">
                                                <img
                                                    class="icon bg-primary"
                                                    src="assets/img/icons/theme/design/saturation.svg"
                                                    alt="saturation icon"
                                                    data-inject-svg
                                                />
                                            </div>
                                            Dark Mode
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-xl-11" data-aos="fade-up">
                                <div class="tab-content">
                                    <div
                                        class="tab-pane fade show active"
                                        id="saas-tab-1"
                                        role="tabpanel"
                                        aria-labelledby="saas-tab-1"
                                    >
                                        <div class="popover-image">
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style={{
                                                    top: "25%",
                                                    left: "10%"
                                                }}
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style={{
                                                    top: "10%",
                                                    left: "90%"
                                                }}
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style={{
                                                    top: "90%",
                                                    left: "20%"
                                                }}
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some more amazing content. It's very engaging. Right?"
                                            ></div>
                                            <img
                                                src="assets/img/saas-1.jpg"
                                                alt="Image"
                                                class="rounded border shadow-lg"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="tab-pane fade"
                                        id="saas-tab-2"
                                        role="tabpanel"
                                        aria-labelledby="saas-tab-2"
                                    >
                                        <div class="popover-image">
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style={{
                                                    top: "25%",
                                                    left: "90%"
                                                }}
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style={{
                                                    top: "90%",
                                                    left: "10%"
                                                }}
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style={{
                                                    top: "30%",
                                                    left: "60%"
                                                }}
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some more amazing content. It's very engaging. Right?"
                                            ></div>
                                            <img
                                                src="assets/img/saas-2.jpg"
                                                alt="Image"
                                                class="rounded border shadow-lg"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="tab-pane fade"
                                        id="saas-tab-3"
                                        role="tabpanel"
                                        aria-labelledby="saas-tab-3"
                                    >
                                        <div class="popover-image">
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style={{
                                                    top: "2%",
                                                    left: "2%"
                                                }}
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style={{
                                                    top: "35%",
                                                    left: "95%"
                                                }}
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style={{
                                                    top: "90%",
                                                    left: "50%"
                                                }}
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some more amazing content. It's very engaging. Right?"
                                            ></div>
                                            <img
                                                src="assets/img/saas-3.jpg"
                                                alt="Image"
                                                class="rounded border shadow-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-primary-alt">
                    <div class="container">
                        <div class="row justify-content-between">
                            <div
                                class="col-xl-5 col-lg-6"
                                data-aos="fade-right"
                            >
                                <div class="row justify-content-center">
                                    <div class="col-md-8 col-lg mb-4 mb-lg-0">
                                        <img
                                            src="assets/img/saas-2.svg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <h3 class="h1">Fits into your workflow</h3>
                                <p class="lead">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium.
                                </p>
                                <div class="row mt-5 o-hidden">
                                    <div
                                        class="col-sm-6"
                                        data-aos="fade-left"
                                        data-aos-delay="100"
                                    >
                                        <a
                                            href="#"
                                            class="card card-sm card-body flex-row align-items-center hover-shadow-3d"
                                        >
                                            <img
                                                class=""
                                                src="assets/img/logos/product/invision.svg"
                                                alt="icon"
                                                data-inject-svg
                                            />
                                            <div class="ml-3">
                                                <h5 class="mb-0">Invision</h5>
                                                <span>Creative Tools</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div
                                        class="col-sm-6"
                                        data-aos="fade-left"
                                        data-aos-delay="200"
                                    >
                                        <a
                                            href="#"
                                            class="card card-sm card-body flex-row align-items-center hover-shadow-3d"
                                        >
                                            <img
                                                class=""
                                                src="assets/img/logos/product/dropbox.svg"
                                                alt="icon"
                                                data-inject-svg
                                            />
                                            <div class="ml-3">
                                                <h5 class="mb-0">Dropbox</h5>
                                                <span>Productivity</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div
                                        class="col-sm-6"
                                        data-aos="fade-left"
                                        data-aos-delay="300"
                                    >
                                        <a
                                            href="#"
                                            class="card card-sm card-body flex-row align-items-center hover-shadow-3d"
                                        >
                                            <img
                                                class=""
                                                src="assets/img/logos/product/slack.svg"
                                                alt="icon"
                                                data-inject-svg
                                            />
                                            <div class="ml-3">
                                                <h5 class="mb-0">Slack</h5>
                                                <span>Communication</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div
                                        class="col-sm-6"
                                        data-aos="fade-left"
                                        data-aos-delay="400"
                                    >
                                        <a
                                            href="#"
                                            class="card card-sm card-body flex-row align-items-center hover-shadow-3d"
                                        >
                                            <img
                                                class=""
                                                src="assets/img/logos/product/trello.svg"
                                                alt="icon"
                                                data-inject-svg
                                            />
                                            <div class="ml-3">
                                                <h5 class="mb-0">Trello</h5>
                                                <span>Productivity</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <a href="#" class="hover-arrow">
                                    View all Integrations
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="has-divider bg-primary-alt">
                    <div class="container pt-5">
                        <div class="row justify-content-between align-items-center o-hidden">
                            <div class="col-md-6 col-lg-5">
                                <div
                                    class="d-flex mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="NaN"
                                >
                                    <div class="process-circle bg-primary"></div>
                                    <div class="ml-3">
                                        <h5>1. Purchase a license</h5>
                                        <p>
                                            Voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="d-flex mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="NaN"
                                >
                                    <div class="process-circle bg-primary"></div>
                                    <div class="ml-3">
                                        <h5>2. Build stunning sites</h5>
                                        <p>
                                            Voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="d-flex mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="NaN"
                                >
                                    <div class="process-circle bg-primary"></div>
                                    <div class="ml-3">
                                        <h5>3. Deploy and make money</h5>
                                        <p>
                                            Voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6" data-aos="fade-left">
                                <img src="assets/img/saas-4.svg" alt="Image" />
                            </div>
                        </div>
                    </div>
                    <div class="divider">
                        <img
                            src="assets/img/dividers/divider-2.svg"
                            alt="graphical divider"
                            data-inject-svg
                        />
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="row justify-content-center text-center mb-6">
                            <div class="col-xl-8 col-lg-9">
                                <h2 class="display-4 mx-xl-6">
                                    How we stack up
                                </h2>
                                <p class="lead">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa.
                                </p>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-xl-10" data-aos="fade-up">
                                <table class="table pricing-table pricing-table-competitors">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th
                                                scope="col"
                                                class="bg-primary-alt"
                                            >
                                                <img
                                                    src="assets/img/logo.svg"
                                                    alt="Image"
                                                />
                                            </th>
                                            <th scope="col">
                                                <img
                                                    src="assets/img/dropbox.svg"
                                                    alt="Image"
                                                />
                                            </th>
                                            <th scope="col">
                                                <img
                                                    src="assets/img/invision.svg"
                                                    alt="Image"
                                                />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <span class="h6 mb-0 d-block">
                                                    Integrations
                                                </span>
                                                <span class="text-small text-muted"></span>
                                            </th>
                                            <td class="bg-primary-alt">
                                                <div class="icon-round icon-round-xs bg-success">
                                                    <img
                                                        class="icon bg-light"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="icon-round icon-round-xs bg-primary-3-alt">
                                                    <img
                                                        class="icon bg-primary-3"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="icon-round icon-round-xs bg-primary-3-alt">
                                                    <img
                                                        class="icon bg-primary-3"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <span class="h6 mb-0 d-block">
                                                    Segmentation
                                                </span>
                                                <span class="text-small text-muted"></span>
                                            </th>
                                            <td class="bg-primary-alt">
                                                <div class="icon-round icon-round-xs bg-success">
                                                    <img
                                                        class="icon bg-light"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="icon-round icon-round-xs bg-primary-3-alt">
                                                    <img
                                                        class="icon bg-primary-3"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="icon-round icon-round-xs bg-primary-3-alt">
                                                    <img
                                                        class="icon bg-primary-3"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <span class="h6 mb-0 d-block">
                                                    White Labelling
                                                </span>
                                                <span class="text-small text-muted"></span>
                                            </th>
                                            <td class="bg-primary-alt">
                                                <div class="icon-round icon-round-xs bg-success">
                                                    <img
                                                        class="icon bg-light"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="icon-round icon-round-xs bg-primary-3-alt">
                                                    <img
                                                        class="icon bg-primary-3"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="icon-round icon-round-xs bg-primary-3-alt">
                                                    <img
                                                        class="icon bg-primary-3"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <span class="h6 mb-0 d-block">
                                                    Document Signing
                                                </span>
                                                <span class="text-small text-muted"></span>
                                            </th>
                                            <td class="bg-primary-alt">
                                                <div class="icon-round icon-round-xs bg-success">
                                                    <img
                                                        class="icon bg-light"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="icon-round icon-round-xs bg-primary-3-alt">
                                                    <img
                                                        class="icon bg-primary-3"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <span class="h6 mb-0 d-block">
                                                    Personalised Support
                                                </span>
                                                <span class="text-small text-muted"></span>
                                            </th>
                                            <td class="bg-primary-alt">
                                                <div class="icon-round icon-round-xs bg-success">
                                                    <img
                                                        class="icon bg-light"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td></td>
                                            <td>
                                                <div class="icon-round icon-round-xs bg-primary-3-alt">
                                                    <img
                                                        class="icon bg-primary-3"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <span class="h6 mb-0 d-block">
                                                    Storage
                                                </span>
                                                <span class="text-small text-muted"></span>
                                            </th>
                                            <td class="bg-primary-alt">
                                                <div class="icon-round icon-round-xs bg-success">
                                                    <img
                                                        class="icon bg-light"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <span class="h6 mb-0 d-block">
                                                    Funnels
                                                </span>
                                                <span class="text-small text-muted"></span>
                                            </th>
                                            <td class="bg-primary-alt">
                                                <div class="icon-round icon-round-xs bg-success">
                                                    <img
                                                        class="icon bg-light"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="icon-round icon-round-xs bg-primary-3-alt">
                                                    <img
                                                        class="icon bg-primary-3"
                                                        src="assets/img/icons/interface/check.svg"
                                                        alt="check interface icon"
                                                        data-inject-svg
                                                    />
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="text-right">
                                    <a href="#" class="hover-arrow">
                                        Explore all features
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center mt-6">
                            <div class="col-xl-7 col-lg-8 col-md-10">
                                <div data-flickity='{ "imagesLoaded": true, "wrapAround": true }'>
                                    <div class="carousel-cell mx-md-4">
                                        <div class="card card-body flex-row py-4">
                                            <img
                                                src="assets/img/avatars/male-2.jpg"
                                                alt="Avatar"
                                                class="avatar avatar-lg"
                                            />
                                            <div class="ml-3">
                                                <h4>
                                                    &ldquo;The team were only
                                                    too happy to help me getting
                                                    started.&rdquo;
                                                </h4>
                                                <div class="avatar-author d-block">
                                                    <h6>Anil Kumar</h6>
                                                    <span>Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-cell mx-md-4">
                                        <div class="card card-body flex-row py-4">
                                            <img
                                                src="assets/img/avatars/male-1.jpg"
                                                alt="Avatar"
                                                class="avatar avatar-lg"
                                            />
                                            <div class="ml-3">
                                                <h4>
                                                    &ldquo;Once again, my
                                                    expectations have been
                                                    surpassed – Bravo!&rdquo;
                                                </h4>
                                                <div class="avatar-author d-block">
                                                    <h6>Benjamin Cameronr</h6>
                                                    <span>Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-cell mx-md-4">
                                        <div class="card card-body flex-row py-4">
                                            <img
                                                src="assets/img/avatars/female-4.jpg"
                                                alt="Avatar"
                                                class="avatar avatar-lg"
                                            />
                                            <div class="ml-3">
                                                <h4>
                                                    &ldquo;What usually takes at
                                                    least 2 or 3 weeks was
                                                    reduced to 4 days.&rdquo;
                                                </h4>
                                                <div class="avatar-author d-block">
                                                    <h6>Annabelle Porter</h6>
                                                    <span>Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="p-0">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-6 col-lg-7 col-md-8 mb-lg-n7 layer-2">
                                <img
                                    src="assets/img/saas-1.svg"
                                    alt="Image"
                                    data-aos="fade-up"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-primary text-light has-divider">
                    <div class="divider flip-y">
                        <img
                            src="assets/img/dividers/divider-3.svg"
                            alt="graphical divider"
                            data-inject-svg
                        />
                    </div>
                    <div class="container">
                        <div class="row justify-content-center mb-0 mb-md-3">
                            <div class="col-xl-6 col-lg-8 col-md-10 text-center">
                                <h3 class="h1">Power your team with Leap</h3>
                            </div>
                        </div>
                        <div class="row justify-content-center text-center">
                            <div class="col-xl-6 col-lg-7 col-md-9">
                                <form class="d-md-flex mb-3 justify-content-center">
                                    <input
                                        type="email"
                                        class="mx-1 mb-2 mb-md-0 form-control form-control-lg"
                                        placeholder="Email Address"
                                    />
                                    <button
                                        class="mx-1 btn btn-primary-3 btn-lg"
                                        type="submit"
                                    >
                                        Get Started
                                    </button>
                                </form>
                                <div class="text-small text-muted mx-xl-6">
                                    Add some helper text here to explain the
                                    fine print details of your product or
                                    service.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <a
                    href="#"
                    class="btn back-to-top btn-primary btn-round"
                    data-smooth-scroll
                    data-aos="fade-up"
                    data-aos-offset="2000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                >
                    <img
                        class="icon"
                        src="assets/img/icons/theme/navigation/arrow-up.svg"
                        alt="arrow-up icon"
                        data-inject-svg
                    />
                </a>
            </div>
        );
    }
}

export default HomePage;
