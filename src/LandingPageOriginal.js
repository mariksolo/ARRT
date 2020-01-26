import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import getInteractions from "./api/getInteractions";
import getCriticalInfo from "./api/getCriticalInfo";
import LandingPagePhoto from "./LandingPagePhoto.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import "./css/aos.css"
class LandingPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  async componentDidMount() {
    let info = await getCriticalInfo("tylenol");
    // console.log(JSON.parse(info));
    console.log(info);
    // info = await info.json();
  }
  render() {
    return (
      // <div style={AppStyle}>
      //   {/* <header > */}
      //   {/* <img src={LandingPagePhoto} /> */}
      //   {/* <img  style={MainPhotoStyle} /> */}
      //   <div style={ImageStyle}>
      //     <h5>ARRT: Adverse Reaction Reporting Tool</h5>
      //     <h1>Your favorite drug interactions, delivered</h1>
          
      //   </div>
        
      //   {/* <p>{info}</p> */}
      //   {/* </header> */}
      //   <div style={commonOTC}>
      //     <p>Common OTC Medications</p>
      //   </div>
      // </div>
      <div>

        <header>
          
        </header>
      </div>
    );
  }
}

const commonOTC = {
  "text-align": "left",
  "color": "#ffffff"
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
