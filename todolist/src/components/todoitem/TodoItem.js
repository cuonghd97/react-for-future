import React, { Component } from 'react';

import classNames from 'classnames/bind'

import './TodoItem.css'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.onItemClick = this.onItemClick.bind(this)
    }
    onItemClick() {
        this.props.item.isComplete = !this.props.item.isComplete
    }

    render() {
        const { item } = this.props
        return (
            <div onClick={this.onItemClick} className={classNames({
                'TodoItem': true,
                'TodoItem-done': item.isComplete
            })}>
                <span>{this.props.item.title}</span>
            </div>
        )
    }
}

export default TodoItem