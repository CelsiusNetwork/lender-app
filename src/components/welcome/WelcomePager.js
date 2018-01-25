import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { Pages } from 'react-native-pages'
import Welcome from './Welcome'
import HowItWorks from './HowItWorks'
import { lenderAppInitToken } from '../../actions'

class WelcomePager extends Component {
  // Rendering Methods
  render () {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.background}>
          <Pages
            style={styles.pagesWrapper}>
            <Welcome />
            <HowItWorks navigation={this.props.navigation} lenderAppInitToken={this.props.lenderAppInitToken} />
          </Pages>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pagesWrapper: {
    flex: 1
  },
  title: {
    fontSize: 38,
    paddingBottom: 12,
    color: '#fff'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  }
})

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {
  lenderAppInitToken
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePager)
