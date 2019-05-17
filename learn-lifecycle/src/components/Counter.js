import React, { Component } from 'react'

import './Counter.css'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.inCrease = this.inCrease.bind(this)
        this.deCrease = this.deCrease.bind(this)
    }

    inCrease() {
        this.setState({
            count: this.state.count + 1
        })
    }

    deCrease() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const { count } = this.state
        return (
            <div className="Counter">
                <button onClick={ this.deCrease }>-</button>
                <p>{ count }</p>
                <button onClick={ this.inCrease }>+</button>
            </div>
        )
    }
}

export default Counter