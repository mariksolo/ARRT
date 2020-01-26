import React from "react";
import logo from "./logo.svg";
import "./App.css";
import getInteractions from "./api/getInteractions";
import getCriticalInfo from "./api/getCriticalInfo";
import LandingPage from './LandingPage';

import Step1 from "./pages/Step1";
import ARRT from "./ARRT";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: "hello"};
  }
  async componentDidMount() {
    let info = await getCriticalInfo("tylenol");
    // console.log(JSON.parse(info));
    this.setState(info);
    // console.log(info);
    console.log(this.state.purpose);
  
    // info = await info.json();
  }
  render() {
    
    return (
      <div>

      
      {/* <div>{this.state.purpose}</div> */}
      <ARRT drug="ibuprofen" />
      {/* <LandingPage /> */}
      </div>
      // <h1>Hi</h1>
    );
  }
}

export default App;
