import React, { Component } from 'react';
import { Chart } from "react-google-charts";


class PieGraph extends Component {
    
    render() {
        return (
            <>
                <Chart
                    chartType="PieChart"
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

export default PieGraph;