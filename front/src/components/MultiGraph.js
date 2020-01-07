import React, { Component } from 'react';
import ComboGraph from './ComboGraph';
import ColumnGraph from './ColumnGraph';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';

class MultiGraph extends Component {

    constructor(){
        super();
        this.setState({graphData: []});
        this.setState({graphOptions: []});
    }

    componentWillMount(){
        this.setState({graphData: [
            ['x',     'Car', 'Motorcycle', 'Utilitiy', 'Public Transport', 'Truck'],
            ['09:10',     1,            1,          1,                  1,       1],
            ['09:20',     1,            1,          1,                  1,       1],
            ['09:30',     1,            1,          1,                  1,       1],
            ['09:40',     1,            1,          1,                  1,       1],
            ['09:50',     1,            1,          1,                  1,       1]
        ]});
        this.setState({graphOptions: {
            curveType : 'function',
            lineWidth : 2,
            pointSize : 2,
            backgroundColor: { fill:'transparent' },
            height: 280,
            hAxis: {viewWindow: {min:0, max: 5}},
            animation:{
                startup: true,
                duration: 200,
                easing: 'out'
            }
        }});
    }

    render() {
        if (this.props.graphType === 'Combo'){
            return (<><ComboGraph graphData={this.state.graphData} graphOptions={this.state.graphOptions}/></>);
        }
        if (this.props.graphType === 'Column'){
            return (<><ColumnGraph graphData={this.state.graphData} graphOptions={this.state.graphOptions}/></>);
        }
        if (this.props.graphType === 'Line'){
            return (<><LineGraph graphData={this.state.graphData} graphOptions={this.state.graphOptions}/></>);
        }
        if (this.props.graphType === 'Bar'){
            return (<><BarGraph graphData={this.state.graphData} graphOptions={this.state.graphOptions}/></>);
        }
        if (this.props.graphType === 'Pie'){
            return (<><PieGraph graphData={this.state.graphData} graphOptions={this.state.graphOptions}/></>);
        }
        return (<><ComboGraph/></>);
    }
}

export default MultiGraph;