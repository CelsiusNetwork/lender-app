import React from 'react'
import {Container} from 'native-base'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {Image} from 'react-native'
import thunk from 'redux-thunk'
import {Font, AppLoading, Asset} from 'expo'

import reducers from './reducers/index'
import Navigator from './Navigator'

import {composeWithDevTools} from 'remote-redux-devtools'

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isReady: false,
      loading: true
    }
  }

  static async loadAssetsAsync () {
    const imageAssets = cacheImages([
      require('../assets/images/background.png'),
      require('../assets/images/background-blur.png')
    ])

    await Promise.all([...imageAssets])
  }

  async componentWillMount () {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'barlow-medium': require('../assets/fonts/Barlow-Medium.ttf')
    })

    this.setState({loading: false})
  }

  render () {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={App.loadAssetsAsync}
          onFinish={() => this.setState({isReady: true})}
          onError={console.warn}
        />
      )
    } else {
      return (
        <Provider store={store}>
          <Container>
            <Navigator />
          </Container>
        </Provider>
      )
    }
  }
}

function cacheImages (images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

export default (App)
