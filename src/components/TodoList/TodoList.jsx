import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import './TodoList.css'

export default class TodoList extends Component {
  state = {
    todoList: [
      {
        id: 1,
        name: '吃饭',
        done: false,
      },
      {
        id: 2,
        name: '睡觉',
        done: false,
      },
      {
        id: 3,
        name: '打豆豆',
        done: false,
      },
    ]
  }

  render() {
    return (
      <div className="todo-list-container">
        <div className="todo-list-box">
          <Header />
          <List todoList={this.state.todoList} />
        </div>
      </div>
    )
  }
}
