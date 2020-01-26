import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Headers extends Component {
  render() {
    return (
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
                  <Link className="nav-link smooth-scroll" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#services">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#gallery">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
