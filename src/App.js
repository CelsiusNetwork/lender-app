import React from 'react'
import {Container} from 'native-base'
import {Provider} from 'react-redux'
import {Font, AppLoading} from 'expo'

import Navigator from './Navigator'
import configureStore from './configureStore'
import {cacheImages} from './utils'

// Create-configure redux store
const store = configureStore({})

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isReady: false,
      loading: true
    }
  }

  // Component Lifecycle Methods
  async componentWillMount () {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'barlow-medium': require('../assets/fonts/Barlow-Medium.ttf')
    })

    this.setState({loading: false})
  }

  // Rendering methods
  render () {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={loadAssetsAsync}
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

/**
 * @name loadAssetsAsync
 * @description load background image before init application
 *
 * @return Promise
 */
const loadAssetsAsync = async () => {
  const imageAssets = cacheImages([
    require('../assets/images/background.png'),
    require('../assets/images/background-blur.png')
  ])

  await Promise.all([...imageAssets])
}

export default (App)
