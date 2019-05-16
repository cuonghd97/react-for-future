import React, { Component } from 'react';

import TodoItem from './components/todoitem/TodoItem';

import './App.css';
import DownArrow from './img/down-arrow.svg'

const ALL = 0
const ACTIVE = 1
const COMPLETE = 2

class App extends Component {
    constructor() {
        super();
        this.state = {
            new_item: '',
            current_filter: ALL,
            todo_list: [
                // { title: "todo 1", isComplete: true },
                // { title: "todo 2", isComplete: true },
                // { title: "todo 3" }
            ],
            list_action: [
                { title: 'All', action: ALL },
                { title: 'Active', action: ACTIVE },
                { title: 'Completed', action: COMPLETE }
            ]
        }
        this.onKeyUp = this.onKeyUp.bind(this)
        this.onChange = this.onChange.bind(this)
        this.clearComplete = this.clearComplete.bind(this)
    }

    onItemClicked(item) {
        return (event) => {
            const isComplete = item.isComplete
            const { todo_list } = this.state
            const index = todo_list.indexOf(item)
            this.setState({
                todo_list: [
                    ...todo_list.slice(0, index),
                    {
                        ...item,
                        isComplete: !isComplete
                    },
                    ...todo_list.slice(index + 1)
                ]
            })
        }
    }

    onKeyUp(event) {
        const text = event.target.value
        if (!text) {
            return
        }
        if (event.keyCode === 13) {
            this.setState({
                new_item: '',
                todo_list:[
                    { title: text, isComplete: false },
                    ...this.state.todo_list
                ]
            })
        }
    }

    onChange(event) {
        this.setState({
            new_item: event.target.value
        })
    }

    onActionClick(item) {
        return (event) => {
            this.setState({
                current_filter: item.action
            })
        }
    }

    clearComplete() {
        let temp_data = this.state.todo_list
        temp_data = temp_data.filter(item => !item.isComplete)
        this.setState({
            todo_list: temp_data
        })
    }

    render() {
        const { new_item, list_action, current_filter } = this.state
        let { todo_list } = this.state
        if (current_filter === ACTIVE) {
            todo_list = todo_list.filter(item=>!item.isComplete)
        } else if (current_filter === COMPLETE) {
            todo_list = todo_list.filter(item=>item.isComplete)
        }
        return (
            <div className="App">
                <div className="InputZone">
                    <img
                        src={ DownArrow }
                        alt="down-arrow"
                        width={32}
                        height={32}
                    />
                    <input
                        type="text"
                        name="input-text"
                        id="input-text"
                        placeholder="Add a note..."
                        value={ new_item }
                        onChange={ this.onChange }
                        onKeyUp={ this.onKeyUp }
                    />
                </div>
                {
                    todo_list.length > 0 ?
                    todo_list.map((item, index) =>
                        (
                            <TodoItem
                                key={index}
                                item={item}
                                onClick={this.onItemClicked(item)}
                            />
                        )
                    ) :
                    <span>Nothing here</span>
                }
                <div className="Footer">
                {
                    list_action.map((item, index) => (
                        <span
                            key={index}
                            onClick={this.onActionClick(item)}
                        >
                            {item.title}
                        </span>
                    ))
                }
                    <span onClick={ this.clearComplete }>Clear Completed</span>
                </div>
            </div>
        );
    }
}

export default App;
