import React, { Component } from 'react';

import TrafficLight from './components/trafficlight/TrafficLight'

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TrafficLight/>
            </div>
        );
    }
}

export default App;
