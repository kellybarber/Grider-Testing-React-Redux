import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import App from 'components/App'

const appRoot = (
  <Root>
    <App/>
  </Root>
)

ReactDOM.render(appRoot, document.querySelector('#root'))