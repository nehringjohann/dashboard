import React, { Component, Fragment } from 'react';
import logo from '../../src/itsc.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ComboGraph from 'ComboGraph';

class MultiGraph extends Component {

    render(props) {
        if (props.graphType == 'Combo'){
            return (<><ComboGraph graphData={props.graphData} graphOptions={props.graphOptions}/></>);
        }
        if (props.graphType == 'Column'){
            return (<><ColumnGraph graphData={props.graphData} graphOptions={props.graphOptions}/></>);
        }
        if (props.graphType == 'Line'){
            return (<><LineGraph graphData={props.graphData} graphOptions={props.graphOptions}/></>);
        }
        if (props.graphType == 'Bar'){
            return (<><BarGraph graphData={props.graphData} graphOptions={props.graphOptions}/></>);
        }
        if (props.graphType == 'Pie'){
            return (<><PieGraph graphData={props.graphData} graphOptions={props.graphOptions}/></>);
        }
        return (<><ComboGraph/></>);
    }
    
}