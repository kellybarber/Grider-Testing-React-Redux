import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'

import App from 'components/App'

const store = createStore( reducers, {} )

const AppRoot = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(AppRoot, document.querySelector('#root'))