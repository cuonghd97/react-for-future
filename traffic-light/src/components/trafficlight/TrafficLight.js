import React, { Component } from 'react'

import classNames from 'classnames/bind'

import './TrafficLight.css'

const RED = 0
const GREEN = 1
const YELLOW = 2

class TrafficLight extends Component {
    render() {
        const { currentColor } = this.props
        return (
            <div className="TrafficLight">
                <div className={classNames('bulb', 'red', {
                    active: currentColor === RED
                })}></div>
                <div className={classNames('bulb', 'green', {
                    active: currentColor === GREEN
                })}></div>
                <div className={classNames('bulb', 'yellow', {
                    active: currentColor === YELLOW
                })}></div>
            </div>
        )
    }
}

export default TrafficLight