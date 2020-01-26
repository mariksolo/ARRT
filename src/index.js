import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LandingPage from "./LandingPage";
import Step1 from "./pages/Step1";
import ARRT from "./ARRT";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { step1 } from "./pages/Step1";

// ReactDOM.render(
// //   <Router>

//       {/* <Route path="/landing" component={LandingPage} /> */}
//       {/* <Route path="/app" component={ARRT} /> */}
//       {/* <Route exact path="/" component={App} /> */}
// //   </Router>,

//   document.getElementById("root")
// );
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/app/:drug" component={ARRT} />
      {/* <ARRT/> */}
      {/* </Route> */}
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
