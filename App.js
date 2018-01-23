import React from 'react'
import Expo, { Constants } from 'expo'
import { Platform, StyleSheet, View } from 'react-native'
import App from './src/App'

import Sentry from 'sentry-expo'
Sentry.enableInExpoDevelopment = true
Sentry.config('https://2c8b64f01d8143c18d85e07c0b440b5f:bbcb9b2f626341a384514be902238caa@sentry.io/272080').install()

Sentry.setTagsContext({
  'environment': process.env.NODE_ENV,
  'react': true
})

export default class AppInit extends React.Component {
  constructor () {
    super()
    this.state = {
      isReady: false
    }
  }

  async componentWillMount () {
    this.setState({ isReady: true })
  }

  renderStatusBar () {
    if (Platform.OS === 'android') { return <View style={styles.statusBar} /> }
  }

  render () {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <App />
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#332fc2',
    height: Constants.statusBarHeight
  }
})
