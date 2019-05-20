import React, { Component } from "react";
import ReactDOM from "react-dom";

class Index extends Component {
    render() {
        return(
            <h3>Hello world</h3>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));