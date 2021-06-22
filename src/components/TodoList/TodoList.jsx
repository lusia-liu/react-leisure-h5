import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import './TodoList.css'

export default class TodoList extends Component {
  render() {
    return (
      <div className="todo-list-container">
        <div className="todo-list-box">
          <Header />
          <List />
        </div>
      </div>
    )
  }
}
