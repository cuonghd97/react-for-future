import React, { Component } from 'react';

import classNames from 'classnames/bind'

import './TodoItem.css'
import check from '../../img/checked.svg'
import uncheck from '../../img/uncheck.svg'

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props
        let done = uncheck
        if (item.isComplete) {
            done = check
        }
        return (
            <div
                className={classNames({
                    'TodoItem': true,
                    'TodoItem-done': item.isComplete
                })}
            >
                <img
                    alt='hi'
                    onClick={onClick}
                    src={done}
                    width={32}
                    height={32}
                />
                <span>{item.title}</span>
            </div>
        )
    }
}

export default TodoItem