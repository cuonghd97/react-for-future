import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

class App extends Component {
    render() {
        return <h1>Hello world</h1>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
module.hot.accept();