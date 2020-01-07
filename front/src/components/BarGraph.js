import React, { Component } from 'react';
import { Chart } from "react-google-charts";


class BarGraph extends Component {
    
    render() {
        return (
            <>
                <Chart
                    chartType="BarChart"
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

export default BarGraph;