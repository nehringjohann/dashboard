import React, { Component } from 'react';
import { Chart } from "react-google-charts";


class ComboGraph extends Component {
    
    render() {
        return (
            <>
                <Chart
                    chartType="ComboChart"
                    data = {this.props.graphData}
                    options = {this.props.graphOptions}
                    width="100%"
                    height="400px"
                    legendToggle
                />
            </>
        );
    }
}

export default ComboGraph;