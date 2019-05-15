import React, { Component } from 'react';
import './App.css';

import TodoItem from './components/todoitem/TodoItem';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todo_item: [
                { title: "todo 1", isComplete: true },
                { title: "todo 2", isComplete: true },
                { title: "todo 3" }
            ]
        }
    }

    onItemClick() {
        this.setState({
            
        })
    }

    render() {
        return (
            <div className="App">
                {
                    this.todo_list.length > 0 ? this.todo_list.map((item, index) => (
                        <TodoItem key={index} item={item} onClick={this.onItemClick}/>
                    )) : 'Nothing here'
                }
            </div>
        );
    }
}

export default App;
