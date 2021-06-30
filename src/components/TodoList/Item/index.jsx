import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" className="input" />
          <span>吃饭</span>
        </label>
      </li>
    )
  }
}
