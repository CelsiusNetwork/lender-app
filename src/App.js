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
      isLoadingAssets: true
    }
  }

  // Component Lifecycle Methods
  async componentWillMount () {
    console.log('yo')
    await loadFontsAsync()
    await loadAssetsAsync()
    console.log('yo after')

    this.setState({ isLoadingAssets: false })
  }

  // Rendering methods
  render () {
    if (this.state.isLoadingAssets) return <AppLoading />

    return (
      <Provider store={store}>
        <Container>
          <Navigator />
        </Container>
      </Provider>
    )
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

/**
 * @name loadFontsAsync
 * @description load all fonts before init application
 *
 * @return Promise
 */
const loadFontsAsync = async () => {
  await Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    'helvetica-neue-lt': require('../assets/fonts/helvetica-neue-lt-std-45-light.ttf'),
    'inconsolata': require('../assets/fonts/Inconsolata-Regular.ttf'),
    'barlow-medium': require('../assets/fonts/Barlow-Medium.ttf'),
    'barlow-bold': require('../assets/fonts/Barlow-Bold.otf'),
    'barlow-semi-bold': require('../assets/fonts/Barlow-SemiBold.otf'),
    'barlow-light': require('../assets/fonts/Barlow-Light.otf'),
    'barlow': require('../assets/fonts/Barlow-Regular.otf')
  })
}

export default (App)
