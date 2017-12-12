import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Pages } from 'react-native-pages'
import Welcome from './Welcome'
import HowItWorks from './HowItWorks'

class WelcomePager extends Component {
  navigate () {
    const navigate2Register = NavigationActions.navigate({
      routeName: 'Register',
      params: {
        name: 'Register'
      }
    })
    this.props.navigation.dispatch(navigate2Register)
  }

  render () {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/images/background.png')} style={styles.background}>
          <Pages>
            <Welcome />
            <HowItWorks />
          </Pages>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePager)
