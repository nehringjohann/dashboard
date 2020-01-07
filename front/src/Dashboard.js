import React, { Component } from 'react';
import Header from './components/Header';
import MultiGraph from './components/MultiGraph';

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <MultiGraph graphType='Combo' />
                <MultiGraph graphType='Column' />
                <MultiGraph graphType='Line' />
                <MultiGraph graphType='Bar' />
                <MultiGraph graphType='Pie' /> 
            </>
        );
    }
}

export default App;