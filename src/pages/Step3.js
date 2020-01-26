import React, { Component } from "react";

import getCriticalInfo from "../api/getCriticalInfo";
import getInteractions from "../api/getInteractions";
import { findByLabelText } from "@testing-library/react";

export class step3 extends Component {
    async componentDidMount() {
        let information = await getCriticalInfo(this.props.drug);
        // console.log(JSON.parse(info));

        // info = await info.json();
        this.setState({ info: information }); //I have to make this so that it logs arrays within info
        let interaction = await getInteractions(this.props.drug);
        console.log(interaction);
        this.setState({ interactions: interaction });
    }

    state = {
        info: [],
        interactions: []
    };

    render() {
        return (
            <div className="Step3">
                <h1 className="Step1Header">Proper Usage and Maintenance</h1>
                <div className="Interactions">
                    <p>Storage and Handling</p>

                    <p>{this.state.storage_and_handling}</p>
                </div>

                <div className="Purpose">
                    <p>Dosage and Administration</p>
                    <p>{this.state.info.dosage_and_administration}</p>
                </div>
            </div>
        );
    }
}

export default step3;
