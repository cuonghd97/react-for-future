import React, { Component } from 'react';

import classNames from 'classnames/bind'

import './TodoItem.css'
import check from '../../img/checked.svg'
import uncheck from '../../img/uncheck.svg'
import garbage from '../../img/garbage.svg'

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
                    onClick={ onClick }
                    src={done}
                    width={32}
                    height={32}
                />
                <p>{item.title}</p>
                <img
                    className='Garbage'
                    src={garbage}
                    alt='trash'
                    width={32}
                    height={32}
                    onClick={ onClick }
                />
            </div>
        )
    }
}

export default TodoItem