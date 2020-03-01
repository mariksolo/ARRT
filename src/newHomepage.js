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

class newHomepage extends React.Component {
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
                                    <img src="assets/img/logo.svg" alt="Leap" />
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
                            <div class="collapse navbar-collapse col px-0 px-lg-2 flex-fill">
                                <div class="py-2 py-lg-0">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <a
                                                href="#"
                                                class="nav-link dropdown-toggle"
                                                data-toggle="dropdown-grid"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                            >
                                                Demos
                                            </a>
                                            <div class="dropdown-menu row">
                                                <div
                                                    class="col-auto"
                                                    data-dropdown-content
                                                >
                                                    <div class="dropdown-grid-menu">
                                                        <a
                                                            href="home-course.html"
                                                            class="dropdown-item fade-page"
                                                        >
                                                            Course
                                                        </a>
                                                        <a
                                                            href="home-coworking.html"
                                                            class="dropdown-item fade-page"
                                                        >
                                                            Coworking
                                                            <span class="badge badge-primary ml-2">
                                                                New
                                                            </span>
                                                        </a>
                                                        <a
                                                            href="home-cryptocurrency.html"
                                                            class="dropdown-item fade-page"
                                                        >
                                                            Cryptocurrency
                                                        </a>
                                                        <a
                                                            href="home-desktop-app.html"
                                                            class="dropdown-item fade-page"
                                                        >
                                                            Desktop App
                                                        </a>
                                                        <a
                                                            href="home-event.html"
                                                            class="dropdown-item fade-page"
                                                        >
                                                            Event
                                                        </a>
                                                        <a
                                                            href="home-mobile-app.html"
                                                            class="dropdown-item fade-page"
                                                        >
                                                            Mobile App
                                                        </a>
                                                        <a
                                                            href="home-portfolio.html"
                                                            class="dropdown-item fade-page"
                                                        >
                                                            Portfolio
                                                        </a>
                                                        <a
                                                            href="home-saas.html"
                                                            class="dropdown-item fade-page"
                                                        >
                                                            SaaS
                                                        </a>
                                                        <a
                                                            href="home-saas-trend.html"
                                                            class="dropdown-item fade-page"
                                                        >
                                                            SaaS - Trend
                                                        </a>
                                                        <a
                                                            href="home-software-library.html"
                                                            class="dropdown-item fade-page"
                                                        >
                                                            Software Library
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a
                                                href="#"
                                                class="nav-link dropdown-toggle"
                                                data-toggle="dropdown-grid"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                            >
                                                Pages
                                            </a>
                                            <div class="dropdown-menu row">
                                                <div
                                                    class="col-auto"
                                                    data-dropdown-content
                                                >
                                                    <div class="dropdown-grid-menu">
                                                        <a
                                                            href="about-company.html"
                                                            class="dropdown-item fade-page"
                                                        >
                                                            About Company
                                                        </a>
                                                        <div class="dropdown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item dropdown-toggle"
                                                                data-toggle="dropdown-grid"
                                                                aria-expanded="false"
                                                                aria-haspopup="true"
                                                            >
                                                                <span>
                                                                    Careers
                                                                </span>
                                                                <img
                                                                    class="icon bg-dark opacity-20"
                                                                    src="assets/img/icons/interface/arrow-caret.svg"
                                                                    alt="arrow-caret interface icon"
                                                                    data-inject-svg
                                                                />
                                                            </a>
                                                            <div class="dropdown-menu row">
                                                                <div
                                                                    class="col-auto"
                                                                    data-dropdown-content
                                                                >
                                                                    <div class="dropdown-grid-menu">
                                                                        <a
                                                                            href="careers.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Careers
                                                                        </a>
                                                                        <a
                                                                            href="career-single.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Career
                                                                            Single
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item dropdown-toggle"
                                                                data-toggle="dropdown-grid"
                                                                aria-expanded="false"
                                                                aria-haspopup="true"
                                                            >
                                                                <span>
                                                                    Contact
                                                                </span>
                                                                <img
                                                                    class="icon bg-dark opacity-20"
                                                                    src="assets/img/icons/interface/arrow-caret.svg"
                                                                    alt="arrow-caret interface icon"
                                                                    data-inject-svg
                                                                />
                                                            </a>
                                                            <div class="dropdown-menu row">
                                                                <div
                                                                    class="col-auto"
                                                                    data-dropdown-content
                                                                >
                                                                    <div class="dropdown-grid-menu">
                                                                        <a
                                                                            href="contact.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Contact
                                                                        </a>
                                                                        <a
                                                                            href="contact-multiple-locations.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Contact
                                                                            -
                                                                            Multiple
                                                                            Locations
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item dropdown-toggle"
                                                                data-toggle="dropdown-grid"
                                                                aria-expanded="false"
                                                                aria-haspopup="true"
                                                            >
                                                                <span>
                                                                    Customers
                                                                </span>
                                                                <img
                                                                    class="icon bg-dark opacity-20"
                                                                    src="assets/img/icons/interface/arrow-caret.svg"
                                                                    alt="arrow-caret interface icon"
                                                                    data-inject-svg
                                                                />
                                                            </a>
                                                            <div class="dropdown-menu row">
                                                                <div
                                                                    class="col-auto"
                                                                    data-dropdown-content
                                                                >
                                                                    <div class="dropdown-grid-menu">
                                                                        <a
                                                                            href="customer-stories.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Customer
                                                                            Stories
                                                                        </a>
                                                                        <a
                                                                            href="customer-story.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Customer
                                                                            Story
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item dropdown-toggle"
                                                                data-toggle="dropdown-grid"
                                                                aria-expanded="false"
                                                                aria-haspopup="true"
                                                            >
                                                                <span>
                                                                    Knowledgebase
                                                                </span>
                                                                <img
                                                                    class="icon bg-dark opacity-20"
                                                                    src="assets/img/icons/interface/arrow-caret.svg"
                                                                    alt="arrow-caret interface icon"
                                                                    data-inject-svg
                                                                />
                                                            </a>
                                                            <div class="dropdown-menu row">
                                                                <div
                                                                    class="col-auto"
                                                                    data-dropdown-content
                                                                >
                                                                    <div class="dropdown-grid-menu">
                                                                        <a
                                                                            href="knowledgebase.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Knowledgebase
                                                                        </a>
                                                                        <a
                                                                            href="knowledgebase-category.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Knowledgebase
                                                                            Category
                                                                        </a>
                                                                        <a
                                                                            href="knowledgebase-article.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Knowledgebase
                                                                            Article
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item dropdown-toggle"
                                                                data-toggle="dropdown-grid"
                                                                aria-expanded="false"
                                                                aria-haspopup="true"
                                                            >
                                                                <span>
                                                                    Pricing
                                                                </span>
                                                                <img
                                                                    class="icon bg-dark opacity-20"
                                                                    src="assets/img/icons/interface/arrow-caret.svg"
                                                                    alt="arrow-caret interface icon"
                                                                    data-inject-svg
                                                                />
                                                            </a>
                                                            <div class="dropdown-menu row">
                                                                <div
                                                                    class="col-auto"
                                                                    data-dropdown-content
                                                                >
                                                                    <div class="dropdown-grid-menu">
                                                                        <a
                                                                            href="pricing-plans.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Pricing
                                                                            Plans
                                                                        </a>
                                                                        <a
                                                                            href="pricing-plans-table.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Pricing
                                                                            Plans
                                                                            Table
                                                                        </a>
                                                                        <a
                                                                            href="pricing-slider.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Pricing
                                                                            Slider
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item dropdown-toggle"
                                                                data-toggle="dropdown-grid"
                                                                aria-expanded="false"
                                                                aria-haspopup="true"
                                                            >
                                                                <span>
                                                                    Utility
                                                                </span>
                                                                <img
                                                                    class="icon bg-dark opacity-20"
                                                                    src="assets/img/icons/interface/arrow-caret.svg"
                                                                    alt="arrow-caret interface icon"
                                                                    data-inject-svg
                                                                />
                                                            </a>
                                                            <div class="dropdown-menu row">
                                                                <div
                                                                    class="col-auto"
                                                                    data-dropdown-content
                                                                >
                                                                    <div class="dropdown-grid-menu">
                                                                        <a
                                                                            href="404.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            404
                                                                        </a>
                                                                        <a
                                                                            href="utility-coming-soon-subscribe.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Coming
                                                                            Soon
                                                                            -
                                                                            Subscribe
                                                                        </a>
                                                                        <a
                                                                            href="utility-coming-soon.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Coming
                                                                            Soon
                                                                        </a>
                                                                        <a
                                                                            href="utility-confirmation-download.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Confirmation
                                                                            -
                                                                            Download
                                                                        </a>
                                                                        <a
                                                                            href="utility-confirmation-subscription.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Confirmation
                                                                            -
                                                                            Subscription
                                                                        </a>
                                                                        <a
                                                                            href="utility-legal.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Legal
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item dropdown-toggle"
                                                                data-toggle="dropdown-grid"
                                                                aria-expanded="false"
                                                                aria-haspopup="true"
                                                            >
                                                                <span>
                                                                    Account
                                                                </span>
                                                                <img
                                                                    class="icon bg-dark opacity-20"
                                                                    src="assets/img/icons/interface/arrow-caret.svg"
                                                                    alt="arrow-caret interface icon"
                                                                    data-inject-svg
                                                                />
                                                            </a>
                                                            <div class="dropdown-menu row">
                                                                <div
                                                                    class="col-auto"
                                                                    data-dropdown-content
                                                                >
                                                                    <div class="dropdown-grid-menu">
                                                                        <a
                                                                            href="account-onboarding.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Onboarding
                                                                        </a>
                                                                        <a
                                                                            href="account-sign-in.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Sign
                                                                            In
                                                                        </a>
                                                                        <a
                                                                            href="account-sign-up.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Sign
                                                                            Up
                                                                        </a>
                                                                        <a
                                                                            href="account-sign-up-image.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Sign
                                                                            Up
                                                                            Image
                                                                        </a>
                                                                        <a
                                                                            href="account-forgot-password.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Forgot
                                                                            Password
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a
                                                href="#"
                                                class="nav-link dropdown-toggle"
                                                data-toggle="dropdown-grid"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                            >
                                                Blog
                                            </a>
                                            <div class="dropdown-menu row">
                                                <div
                                                    class="col-auto"
                                                    data-dropdown-content
                                                >
                                                    <div class="dropdown-grid-menu">
                                                        <div class="dropdown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item dropdown-toggle"
                                                                data-toggle="dropdown-grid"
                                                                aria-expanded="false"
                                                                aria-haspopup="true"
                                                            >
                                                                <span>
                                                                    Blog Layouts
                                                                </span>
                                                                <img
                                                                    class="icon bg-dark opacity-20"
                                                                    src="assets/img/icons/interface/arrow-caret.svg"
                                                                    alt="arrow-caret interface icon"
                                                                    data-inject-svg
                                                                />
                                                            </a>
                                                            <div class="dropdown-menu row">
                                                                <div
                                                                    class="col-auto"
                                                                    data-dropdown-content
                                                                >
                                                                    <div class="dropdown-grid-menu">
                                                                        <a
                                                                            href="blog-cards.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Blog
                                                                            Cards
                                                                        </a>
                                                                        <a
                                                                            href="blog-masonry.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Blog
                                                                            Masonry
                                                                        </a>
                                                                        <a
                                                                            href="blog-sidebar.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Blog
                                                                            Sidebar
                                                                        </a>
                                                                        <a
                                                                            href="blog-magazine.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Blog
                                                                            Magazine
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item dropdown-toggle"
                                                                data-toggle="dropdown-grid"
                                                                aria-expanded="false"
                                                                aria-haspopup="true"
                                                            >
                                                                <span>
                                                                    Article
                                                                    Layouts
                                                                </span>
                                                                <img
                                                                    class="icon bg-dark opacity-20"
                                                                    src="assets/img/icons/interface/arrow-caret.svg"
                                                                    alt="arrow-caret interface icon"
                                                                    data-inject-svg
                                                                />
                                                            </a>
                                                            <div class="dropdown-menu row">
                                                                <div
                                                                    class="col-auto"
                                                                    data-dropdown-content
                                                                >
                                                                    <div class="dropdown-grid-menu">
                                                                        <a
                                                                            href="blog-article.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Article
                                                                            Basic
                                                                        </a>
                                                                        <a
                                                                            href="blog-article-video.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Article
                                                                            Video
                                                                        </a>
                                                                        <a
                                                                            href="blog-article-image-header.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Article
                                                                            Image
                                                                            Header
                                                                        </a>
                                                                        <a
                                                                            href="blog-article-image-header-parallax.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Article
                                                                            Image
                                                                            Parallax
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a
                                                href="#"
                                                class="nav-link dropdown-toggle"
                                                data-toggle="dropdown-grid"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                            >
                                                Portfolio
                                            </a>
                                            <div class="dropdown-menu row">
                                                <div
                                                    class="col-auto"
                                                    data-dropdown-content
                                                >
                                                    <div class="dropdown-grid-menu">
                                                        <div class="dropdown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item dropdown-toggle"
                                                                data-toggle="dropdown-grid"
                                                                aria-expanded="false"
                                                                aria-haspopup="true"
                                                            >
                                                                <span>
                                                                    Grid Layouts
                                                                </span>
                                                                <img
                                                                    class="icon bg-dark opacity-20"
                                                                    src="assets/img/icons/interface/arrow-caret.svg"
                                                                    alt="arrow-caret interface icon"
                                                                    data-inject-svg
                                                                />
                                                            </a>
                                                            <div class="dropdown-menu row">
                                                                <div
                                                                    class="col-auto"
                                                                    data-dropdown-content
                                                                >
                                                                    <div class="dropdown-grid-menu">
                                                                        <a
                                                                            href="portfolio-2-columns.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            2
                                                                            Columns
                                                                        </a>
                                                                        <a
                                                                            href="portfolio-3-columns.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            3
                                                                            Columns
                                                                        </a>
                                                                        <a
                                                                            href="portfolio-4-columns.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            4
                                                                            Columns
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item dropdown-toggle"
                                                                data-toggle="dropdown-grid"
                                                                aria-expanded="false"
                                                                aria-haspopup="true"
                                                            >
                                                                <span>
                                                                    Project
                                                                    Layouts
                                                                </span>
                                                                <img
                                                                    class="icon bg-dark opacity-20"
                                                                    src="assets/img/icons/interface/arrow-caret.svg"
                                                                    alt="arrow-caret interface icon"
                                                                    data-inject-svg
                                                                />
                                                            </a>
                                                            <div class="dropdown-menu row">
                                                                <div
                                                                    class="col-auto"
                                                                    data-dropdown-content
                                                                >
                                                                    <div class="dropdown-grid-menu">
                                                                        <a
                                                                            href="portfolio-case-study.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Case
                                                                            Study
                                                                        </a>
                                                                        <a
                                                                            href="portfolio-single-sidebar.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Sidebar
                                                                        </a>
                                                                        <a
                                                                            href="portfolio-single-slider.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Slider
                                                                        </a>
                                                                        <a
                                                                            href="portfolio-single-parallax.html"
                                                                            class="dropdown-item fade-page"
                                                                        >
                                                                            Parallax
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a
                                                href="#"
                                                class="nav-link dropdown-toggle"
                                                data-toggle="dropdown-grid"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                            >
                                                Elements
                                            </a>
                                            <div class="dropdown-menu bg-primary-3 text-light border-bottom">
                                                <div
                                                    class="container py-4"
                                                    data-dropdown-content
                                                >
                                                    <div class="row">
                                                        <div class="col-lg col-md-4 mb-3 mb-lg-0">
                                                            <h5>Base</h5>
                                                            <div>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-grid.html"
                                                                >
                                                                    Grid
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-forms.html"
                                                                >
                                                                    Forms
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-tables.html"
                                                                >
                                                                    Tables
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-typography.html"
                                                                >
                                                                    Typography
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg col-md-4 mb-3 mb-lg-0">
                                                            <h5>General</h5>
                                                            <div>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-alerts.html"
                                                                >
                                                                    Alerts
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-avatars.html"
                                                                >
                                                                    Avatars
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-badges.html"
                                                                >
                                                                    Badges
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-breadcrumbs.html"
                                                                >
                                                                    Breadcrumbs
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-buttons.html"
                                                                >
                                                                    Buttons
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-cards.html"
                                                                >
                                                                    Cards
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-dropdowns-bootstrap.html"
                                                                >
                                                                    Dropdowns
                                                                    Bootstrap
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-dropdowns-grid.html"
                                                                >
                                                                    Dropdowns
                                                                    Grid
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-footers.html"
                                                                >
                                                                    Footers
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-navbars.html"
                                                                >
                                                                    Navigation
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-tooltips.html"
                                                                >
                                                                    Tooltips
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-toasts.html"
                                                                >
                                                                    Toasts
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-widgets.html"
                                                                >
                                                                    Widgets
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg col-md-4 mb-3 mb-lg-0">
                                                            <h5>Graphic</h5>
                                                            <div>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-decorations.html"
                                                                >
                                                                    Decorations
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-dividers.html"
                                                                >
                                                                    Dividers
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-icons.html"
                                                                >
                                                                    Icons
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-icons-reference.html"
                                                                >
                                                                    Icons
                                                                    Reference
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-processes.html"
                                                                >
                                                                    Processes
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-progress.html"
                                                                >
                                                                    Progress
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-pricing.html"
                                                                >
                                                                    Pricing
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg col-md-4 mb-3 mb-lg-0">
                                                            <h5>Media</h5>
                                                            <div>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-fancybox.html"
                                                                >
                                                                    Fancybox
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-isotope.html"
                                                                >
                                                                    Isotope
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-maps.html"
                                                                >
                                                                    Maps
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-flickity.html"
                                                                >
                                                                    Slider
                                                                    Flickity
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-twitter.html"
                                                                >
                                                                    Twitter
                                                                    Feeds
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-video-players.html"
                                                                >
                                                                    Video
                                                                    Players
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-video-backgrounds.html"
                                                                >
                                                                    Video
                                                                    Backgrounds
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg col-md-4 mb-3 mb-lg-0">
                                                            <h5>Interactive</h5>
                                                            <div>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-animations.html"
                                                                >
                                                                    Animations
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-accordions.html"
                                                                >
                                                                    Accordion
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-counters.html"
                                                                >
                                                                    Counters
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-countdown.html"
                                                                >
                                                                    Countdown
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-date-picker.html"
                                                                >
                                                                    Date Picker
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-modals.html"
                                                                >
                                                                    Modals
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-navs.html"
                                                                >
                                                                    Tabs (Nav)
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-typed-text.html"
                                                                >
                                                                    Typed Text
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-parallax.html"
                                                                >
                                                                    Parallax
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-popovers.html"
                                                                >
                                                                    Popovers
                                                                </a>
                                                                <a
                                                                    class="dropdown-item fade-page"
                                                                    href="elements-wizards.html"
                                                                >
                                                                    Wizards
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a
                                                href="#"
                                                class="nav-link dropdown-toggle"
                                                data-toggle="dropdown-grid"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                            >
                                                Support
                                            </a>
                                            <div class="dropdown-menu row">
                                                <div
                                                    class="col-auto px-0"
                                                    data-dropdown-content
                                                >
                                                    <div class="bg-white rounded border shadow-lg o-hidden">
                                                        <div class="p-3">
                                                            <h6 class="mb-0">
                                                                Product Support
                                                            </h6>
                                                        </div>
                                                        <div class="list-group list-group-flush">
                                                            <a
                                                                href="documentation/index.html"
                                                                target="_blank"
                                                                class="list-group-item list-group-item-action d-flex align-items-center p-3"
                                                            >
                                                                <img
                                                                    class="icon icon-md"
                                                                    src="assets/img/icons/theme/files/selected-file.svg"
                                                                    alt="selected-file icon"
                                                                    data-inject-svg
                                                                />
                                                                <div class="text-body ml-3">
                                                                    <span>
                                                                        Documentation
                                                                    </span>
                                                                    <div class="text-small text-muted">
                                                                        Get all
                                                                        the
                                                                        information
                                                                        you need
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a
                                                                href="https://themes.zendesk.com/hc/en-us/articles/360000006291-How-do-I-get-help-with-the-theme-I-purchased-"
                                                                target="_blank"
                                                                class="list-group-item list-group-item-action d-flex align-items-center p-3"
                                                            >
                                                                <img
                                                                    class="icon icon-md"
                                                                    src="assets/img/icons/theme/communication/chat-4.svg"
                                                                    alt="chat-4 icon"
                                                                    data-inject-svg
                                                                />
                                                                <div class="text-body ml-3">
                                                                    <span>
                                                                        Looking
                                                                        for
                                                                        answers?
                                                                    </span>
                                                                    <div class="text-small text-muted">
                                                                        Get
                                                                        support
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="collapse navbar-collapse justify-content-end col flex-fill px-0">
                                <a
                                    href="https://themes.getbootstrap.com/product/leap-multipurpose-bootstrap-theme/"
                                    class="btn btn-primary ml-lg-3"
                                >
                                    Purchase Now
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
                                <h1 class="display-4">Build it with Leap</h1>
                                <p class="lead">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore.
                                </p>
                                <form class="d-sm-flex mb-2 mt-4">
                                    <input
                                        type="email"
                                        class="form-control form-control-lg mr-sm-2 mb-2 mb-sm-0"
                                        placeholder="you@yoursite.com"
                                    />
                                    <button
                                        class="btn btn-lg btn-primary"
                                        type="submit"
                                    >
                                        Get Started
                                    </button>
                                </form>
                                <span class="text-small text-muted">
                                    Already using Leap? <a href="#">Sign In</a>
                                </span>
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
                                <h2 class="h1">
                                    Multiple layouts for your SaaS
                                </h2>
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
                                    <h4>Communication</h4>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam.
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
                                    <h4>Payments</h4>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam.
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
                                    <h4>Sushi</h4>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam.
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
                                                style="top: 25%; left: 10%;"
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style="top: 10%; left: 90%;"
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style="top: 90%; left: 20%;"
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
                                                style="top: 25%; left: 90%;"
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style="top: 90%; left: 10%;"
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style="top: 30%; left: 60%;"
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
                                                style="top: 2%; left: 2%;"
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style="top: 35%; left: 95%;"
                                                data-toggle="popover"
                                                title="Hotspot title"
                                                data-content="And here's some amazing content. It's very engaging. Right?"
                                            ></div>
                                            <div
                                                class="popover-hotspot bg-primary-2"
                                                style="top: 90%; left: 50%;"
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

export default newHomepage;
