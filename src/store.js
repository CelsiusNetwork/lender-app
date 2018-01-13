import { AsyncStorage } from 'react-native'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

import * as persistActionCreators from './services/persist/actions'
import reducers from './reducers/index'

const enhancer = compose(applyMiddleware(thunk))

const store = createStore(reducers, enhancer)

export const persist = persistStore(store, {
  storage: AsyncStorage
}, () => store.dispatch(persistActionCreators.update({ isHydrated: true })))

export default store