import React from 'react'
import { Container } from 'native-base'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Font } from 'expo'

import reducers from './reducers/index'
import Navigator from './Navigator'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
// console.log('Initial application state:')
// console.log(store.getState())

class App extends React.Component {
  getState = () => {
    store.getState()
  }

  componentWillReceiveProps () {
  }

  render () {
    return (
      <Provider store={store}>
        <Container>
          <Navigator />
        </Container>
      </Provider>
    )
  }
}

export default (App)
