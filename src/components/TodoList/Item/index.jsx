import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    return (
      this.props.todoList.map(item => <li key={item.id}>{item.name}</li>)
    )
  }
}
