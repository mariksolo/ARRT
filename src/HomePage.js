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
      <div data-smooth-scroll-offset="73" className="loaded" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">
        <div classNameName="loader">
          <div className="loading-animation"></div>
        </div>
        <div className="navbar-container" style={{"min-height": "73px", "margin-bottom": "-73px"}}>
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            data-overlay
            data-sticky="top"
          >
            <div className="container">
              <a className="navbar-brand fade-page" href="index.html">
                <img src="assets/img/logo-white.svg" alt="Leap" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img
                  className="icon navbar-toggler-open"
                  src="assets/img/icons/interface/menu.svg"
                  alt="menu interface icon"
                  data-inject-svg
                />
                <img
                  className="icon navbar-toggler-close"
                  src="assets/img/icons/interface/cross.svg"
                  alt="cross interface icon"
                  data-inject-svg
                />
              </button>
              <div className="collapse navbar-collapse justify-content-end">
                <div className="py-2 py-lg-0">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Demos
                      </a>
                      <div className="dropdown-menu row">
                        <div className="col-auto" data-dropdown-content>
                          <div className="dropdown-grid-menu">
                            <a
                              href="home-course.html"
                              className="dropdown-item fade-page"
                            >
                              Course
                            </a>
                            <a
                              href="home-coworking.html"
                              className="dropdown-item fade-page"
                            >
                              Coworking
                              <span className="badge badge-primary ml-2">New</span>
                            </a>
                            <a
                              href="home-cryptocurrency.html"
                              className="dropdown-item fade-page"
                            >
                              Cryptocurrency
                            </a>
                            <a
                              href="home-desktop-app.html"
                              className="dropdown-item fade-page"
                            >
                              Desktop App
                            </a>
                            <a
                              href="home-event.html"
                              className="dropdown-item fade-page"
                            >
                              Event
                            </a>
                            <a
                              href="home-mobile-app.html"
                              className="dropdown-item fade-page"
                            >
                              Mobile App
                            </a>
                            <a
                              href="home-portfolio.html"
                              className="dropdown-item fade-page"
                            >
                              Portfolio
                            </a>
                            <a
                              href="home-saas.html"
                              className="dropdown-item fade-page"
                            >
                              SaaS
                            </a>
                            <a
                              href="home-saas-trend.html"
                              className="dropdown-item fade-page"
                            >
                              SaaS - Trend
                            </a>
                            <a
                              href="home-software-library.html"
                              className="dropdown-item fade-page"
                            >
                              Software Library
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Pages
                      </a>
                      <div className="dropdown-menu row">
                        <div className="col-auto" data-dropdown-content>
                          <div className="dropdown-grid-menu">
                            <a
                              href="about-company.html"
                              className="dropdown-item fade-page"
                            >
                              About Company
                            </a>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Careers</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="careers.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Careers
                                    </a>
                                    <a
                                      href="career-single.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Career Single
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Contact</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="contact.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Contact
                                    </a>
                                    <a
                                      href="contact-multiple-locations.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Contact - Multiple Locations
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Customers</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="customer-stories.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Customer Stories
                                    </a>
                                    <a
                                      href="customer-story.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Customer Story
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Knowledgebase</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="knowledgebase.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Knowledgebase
                                    </a>
                                    <a
                                      href="knowledgebase-category.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Knowledgebase Category
                                    </a>
                                    <a
                                      href="knowledgebase-article.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Knowledgebase Article
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Pricing</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="pricing-plans.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Pricing Plans
                                    </a>
                                    <a
                                      href="pricing-plans-table.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Pricing Plans Table
                                    </a>
                                    <a
                                      href="pricing-slider.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Pricing Slider
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Utility</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="404.html"
                                      className="dropdown-item fade-page"
                                    >
                                      404
                                    </a>
                                    <a
                                      href="utility-coming-soon-subscribe.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Coming Soon - Subscribe
                                    </a>
                                    <a
                                      href="utility-coming-soon.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Coming Soon
                                    </a>
                                    <a
                                      href="utility-confirmation-download.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Confirmation - Download
                                    </a>
                                    <a
                                      href="utility-confirmation-subscription.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Confirmation - Subscription
                                    </a>
                                    <a
                                      href="utility-legal.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Legal
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Account</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="account-onboarding.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Onboarding
                                    </a>
                                    <a
                                      href="account-sign-in.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Sign In
                                    </a>
                                    <a
                                      href="account-sign-up.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Sign Up
                                    </a>
                                    <a
                                      href="account-sign-up-image.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Sign Up Image
                                    </a>
                                    <a
                                      href="account-forgot-password.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Forgot Password
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Blog
                      </a>
                      <div className="dropdown-menu row">
                        <div className="col-auto" data-dropdown-content>
                          <div className="dropdown-grid-menu">
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Blog Layouts</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="blog-cards.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Blog Cards
                                    </a>
                                    <a
                                      href="blog-masonry.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Blog Masonry
                                    </a>
                                    <a
                                      href="blog-sidebar.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Blog Sidebar
                                    </a>
                                    <a
                                      href="blog-magazine.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Blog Magazine
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Article Layouts</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="blog-article.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Article Basic
                                    </a>
                                    <a
                                      href="blog-article-video.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Article Video
                                    </a>
                                    <a
                                      href="blog-article-image-header.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Article Image Header
                                    </a>
                                    <a
                                      href="blog-article-image-header-parallax.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Article Image Parallax
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Portfolio
                      </a>
                      <div className="dropdown-menu row">
                        <div className="col-auto" data-dropdown-content>
                          <div className="dropdown-grid-menu">
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Grid Layouts</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="portfolio-2-columns.html"
                                      className="dropdown-item fade-page"
                                    >
                                      2 Columns
                                    </a>
                                    <a
                                      href="portfolio-3-columns.html"
                                      className="dropdown-item fade-page"
                                    >
                                      3 Columns
                                    </a>
                                    <a
                                      href="portfolio-4-columns.html"
                                      className="dropdown-item fade-page"
                                    >
                                      4 Columns
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-item dropdown-toggle"
                                data-toggle="dropdown-grid"
                                aria-expanded="false"
                                aria-haspopup="true"
                              >
                                <span>Project Layouts</span>
                                <img
                                  className="icon bg-dark opacity-20"
                                  src="assets/img/icons/interface/arrow-caret.svg"
                                  alt="arrow-caret interface icon"
                                  data-inject-svg
                                />
                              </a>
                              <div className="dropdown-menu row">
                                <div className="col-auto" data-dropdown-content>
                                  <div className="dropdown-grid-menu">
                                    <a
                                      href="portfolio-case-study.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Case Study
                                    </a>
                                    <a
                                      href="portfolio-single-sidebar.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Sidebar
                                    </a>
                                    <a
                                      href="portfolio-single-slider.html"
                                      className="dropdown-item fade-page"
                                    >
                                      Slider
                                    </a>
                                    <a
                                      href="portfolio-single-parallax.html"
                                      className="dropdown-item fade-page"
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
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Elements
                      </a>
                      <div className="dropdown-menu bg-primary-3 text-light border-bottom">
                        <div className="container py-4" data-dropdown-content>
                          <div className="row">
                            <div className="col-lg col-md-4 mb-3 mb-lg-0">
                              <h5>Base</h5>
                              <div>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-grid.html"
                                >
                                  Grid
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-forms.html"
                                >
                                  Forms
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-tables.html"
                                >
                                  Tables
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-typography.html"
                                >
                                  Typography
                                </a>
                              </div>
                            </div>
                            <div className="col-lg col-md-4 mb-3 mb-lg-0">
                              <h5>General</h5>
                              <div>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-alerts.html"
                                >
                                  Alerts
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-avatars.html"
                                >
                                  Avatars
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-badges.html"
                                >
                                  Badges
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-breadcrumbs.html"
                                >
                                  Breadcrumbs
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-buttons.html"
                                >
                                  Buttons
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-cards.html"
                                >
                                  Cards
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-dropdowns-bootstrap.html"
                                >
                                  Dropdowns Bootstrap
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-dropdowns-grid.html"
                                >
                                  Dropdowns Grid
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-footers.html"
                                >
                                  Footers
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-navbars.html"
                                >
                                  Navigation
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-tooltips.html"
                                >
                                  Tooltips
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-toasts.html"
                                >
                                  Toasts
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-widgets.html"
                                >
                                  Widgets
                                </a>
                              </div>
                            </div>
                            <div className="col-lg col-md-4 mb-3 mb-lg-0">
                              <h5>Graphic</h5>
                              <div>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-decorations.html"
                                >
                                  Decorations
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-dividers.html"
                                >
                                  Dividers
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-icons.html"
                                >
                                  Icons
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-icons-reference.html"
                                >
                                  Icons Reference
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-processes.html"
                                >
                                  Processes
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-progress.html"
                                >
                                  Progress
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-pricing.html"
                                >
                                  Pricing
                                </a>
                              </div>
                            </div>
                            <div className="col-lg col-md-4 mb-3 mb-lg-0">
                              <h5>Media</h5>
                              <div>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-fancybox.html"
                                >
                                  Fancybox
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-isotope.html"
                                >
                                  Isotope
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-maps.html"
                                >
                                  Maps
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-flickity.html"
                                >
                                  Slider Flickity
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-twitter.html"
                                >
                                  Twitter Feeds
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-video-players.html"
                                >
                                  Video Players
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-video-backgrounds.html"
                                >
                                  Video Backgrounds
                                </a>
                              </div>
                            </div>
                            <div className="col-lg col-md-4 mb-3 mb-lg-0">
                              <h5>Interactive</h5>
                              <div>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-animations.html"
                                >
                                  Animations
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-accordions.html"
                                >
                                  Accordion
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-counters.html"
                                >
                                  Counters
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-countdown.html"
                                >
                                  Countdown
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-date-picker.html"
                                >
                                  Date Picker
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-modals.html"
                                >
                                  Modals
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-navs.html"
                                >
                                  Tabs (Nav)
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-typed-text.html"
                                >
                                  Typed Text
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-parallax.html"
                                >
                                  Parallax
                                </a>
                                <a
                                  className="dropdown-item fade-page"
                                  href="elements-popovers.html"
                                >
                                  Popovers
                                </a>
                                <a
                                  className="dropdown-item fade-page"
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
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown-grid"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        Support
                      </a>
                      <div className="dropdown-menu row">
                        <div className="col-auto px-0" data-dropdown-content>
                          <div className="bg-white rounded border shadow-lg o-hidden">
                            <div className="p-3">
                              <h6 className="mb-0">Product Support</h6>
                            </div>
                            <div className="list-group list-group-flush">
                              <a
                                href="documentation/index.html"
                                target="_blank"
                                className="list-group-item list-group-item-action d-flex align-items-center p-3"
                              >
                                <img
                                  className="icon icon-md"
                                  src="assets/img/icons/theme/files/selected-file.svg"
                                  alt="selected-file icon"
                                  data-inject-svg
                                />
                                <div className="text-body ml-3">
                                  <span>Documentation</span>
                                  <div className="text-small text-muted">
                                    Get all the information you need
                                  </div>
                                </div>
                              </a>
                              <a
                                href="https://themes.zendesk.com/hc/en-us/articles/360000006291-How-do-I-get-help-with-the-theme-I-purchased-"
                                target="_blank"
                                className="list-group-item list-group-item-action d-flex align-items-center p-3"
                              >
                                <img
                                  className="icon icon-md"
                                  src="assets/img/icons/theme/communication/chat-4.svg"
                                  alt="chat-4 icon"
                                  data-inject-svg
                                />
                                <div className="text-body ml-3">
                                  <span>Looking for answers?</span>
                                  <div className="text-small text-muted">
                                    Get support
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
                <a
                  href="https://themes.getbootstrap.com/product/leap-multipurpose-bootstrap-theme/"
                  className="btn btn-white ml-lg-3"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div
          data-overlay
          className="bg-primary text-light o-hidden position-relative"
        >
          <div className="position-absolute w-100 h-100 o-hidden top-0">
            <div className="decoration right bottom scale-2">
              <img
                className="bg-primary-2"
                src="assets/img/decorations/deco-blob-2.svg"
                alt="deco-blob-2 decoration"
                data-inject-svg
              />
            </div>
            <div className="decoration right bottom scale-3">
              <img
                className="bg-white"
                src="assets/img/decorations/deco-dots-6.svg"
                alt="deco-dots-6 decoration"
                data-inject-svg
              />
            </div>
            <div className="decoration top left scale-2  d-none d-md-block">
              <img
                className="bg-primary-3"
                src="assets/img/decorations/deco-blob-1.svg"
                alt="deco-blob-1 decoration"
                data-inject-svg
              />
            </div>
          </div>
          <section className="min-vh-70 o-hidden d-flex flex-column justify-content-center">
            <div className="container">
              <div className="row justify-content-center text-center align-items-center">
                <div
                  className="col-xl-8 col-lg-9 col-md-10 layer-3"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h1 className="display-3">
                    Launch on time,
                    <br />
                    look on-trend.
                  </h1>
                  <div className="mb-4">
                    <p className="lead px-xl-5">
                      Save countless hours of design and development and ship
                      performant sites with killer looks.
                    </p>
                  </div>
                  <form>
                    <div className="input-group input-group-lg mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon-1">
                          <img
                            className="icon"
                            src={searchIcon}
                            alt="search icon"
                            data-inject-svg
                          />
                        </span>
                      </div>
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search for articles"
                        aria-label="Search"
                        aria-describedby="basic-addon-1"
                      />
                    </div>
                  </form>
                  <a
                    href="#demos"
                    className="btn btn-lg btn-white mx-1"
                    data-smooth-scroll
                  >
                    View Demos
                  </a>
                  <a
                    href="https://themes.getbootstrap.com/product/leap-multipurpose-bootstrap-theme/"
                    className="btn btn-lg btn-primary-3 mx-1"
                  >
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="divider flip-x">
            <img
              src="assets/img/dividers/divider-2.svg"
              alt="graphical divider"
              data-inject-svg
            />
          </div>
        </div>
        <section className="text-center" id="demos">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <h2 className="h1">
                  Get started with a production-ready landing page or build your
                  own.
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-0">
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-md-6">
                <a className="fade-page" href="home-coworking.html">
                  <img
                    src="assets/img/demos/home-coworking.png"
                    alt="Coworking"
                    className="rounded shadow-3d hover-shadow-3d border mb-3 mb-md-0"
                  />
                </a>
              </div>
              <div className="col">
                <div className="row justify-content-center">
                  <div className="col-xl-9 col-lg-10">
                    <a href="home-coworking.html" className="fade-up">
                      <h3 className="h2">
                        Coworking
                        <span className="badge badge-primary ml-2">New</span>
                      </h3>
                    </a>
                    <p className="lead">
                      A landing for shared workspaces with date picker
                      functionality.
                    </p>
                    <ul className="list-unstyled my-3">
                      <li className="d-flex align-items-center my-2">
                        <img
                          className="icon icon-lg"
                          src="assets/img/icons/theme/home/clock.svg"
                          alt="icon"
                          data-inject-svg
                        />
                        <span className="h6 mb-0 ml-2">Date picker</span>
                      </li>
                      <li className="d-flex align-items-center my-2">
                        <img
                          className="icon icon-lg"
                          src="assets/img/icons/theme/communication/rss.svg"
                          alt="icon"
                          data-inject-svg
                        />
                        <span className="h6 mb-0 ml-2">Blog listing cards</span>
                      </li>
                      <li className="d-flex align-items-center my-2">
                        <img
                          className="icon icon-lg"
                          src="assets/img/icons/theme/media/movie-lane-2.svg"
                          alt="icon"
                          data-inject-svg
                        />
                        <span className="h6 mb-0 ml-2">
                          Fullscreen video lightbox
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
