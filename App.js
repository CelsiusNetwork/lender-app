import React from 'react'
import Expo, { Constants, Font } from 'expo'
import { Platform, StyleSheet, View } from 'react-native'
import App from './src/App'

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
