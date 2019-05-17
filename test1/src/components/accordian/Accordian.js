import React, { Component } from 'react'

class Accordian extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCollapsed: true
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
       this.setState({
           isCollapsed: !this.state.isCollapsed
       })
    }

    render() {
        const { heading, children } = this.props
        const { isCollapsed } = this.state
        return (
            <div onClick={ this.onClick }>
                <h3 className="heading">{ heading }</h3>
                { !isCollapsed && <div className="content">{ children }</div> }
            </div>
        )
    }
}

export default Accordian