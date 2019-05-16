import React, { Component } from 'react';

import './App.css';

import TodoItem from './components/todoitem/TodoItem';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todo_list: [
                { title: "todo 1", isComplete: true },
                { title: "todo 2", isComplete: true },
                { title: "todo 3" }
            ]
        }
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

    render() {
        const { todo_list } = this.state
        return (
            <div className="App">
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
                        'Nothing here'
                }
            </div>
        );
    }
}

export default App;
