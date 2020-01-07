import React, { Component } from 'react';
import { Chart } from "react-google-charts";


class ColumnGraph extends Component {
    
    render() {
        return (
            <>
                <Chart
                    chartType="ColumnChart"
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

export default ColumnGraph;