import React, { Component } from 'react';
import logo from '../../src/itsc.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Chart } from "react-google-charts";


class ComboGraph extends Component {
    
    render() {
        return (
            <>
                <Chart
                    chartType="ScatterChart"
                    data = {props.graphData}
                    options = {props.graphOptions}
                    width="100%"
                    height="400px"
                    legendToggle
                />
            </>
        );
    }
    
}