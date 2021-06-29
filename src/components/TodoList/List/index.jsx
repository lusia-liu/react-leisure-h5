import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    return (
      <ul className="list">
        <Item todoList={this.props.todoList}/>
      </ul>
    )
  }
}
