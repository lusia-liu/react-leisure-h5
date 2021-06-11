import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// 引入这个为了记录页面上的性能
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  // 在app的外侧包裹React.StrictMode 可以检查代码规范 比如说即将弃用的一些api
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
