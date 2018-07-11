import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Root from 'Root'
import App from 'components/App'

const appRoot = (
  <Root>
    <BrowserRouter>
      <Route  path='/' component={App} />
    </BrowserRouter>
  </Root>
)

ReactDOM.render(appRoot, document.querySelector('#root'))