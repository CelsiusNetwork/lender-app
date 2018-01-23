import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {composeWithDevTools} from 'remote-redux-devtools'

const configureStore = (initialState) => {
  const middleware = applyMiddleware(thunk)

  if (process.env.NODE_ENV !== 'development') {
    return createStore(reducers, initialState, middleware)
  } else {
    return createStore(reducers, initialState, composeWithDevTools(middleware))
  }
}

export default configureStore
