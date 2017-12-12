import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class Welcome extends Component {
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
        <Image source={require('../../../assets/images/logo-small.png')} style={styles.logo} />
        <Text style={styles.header}>{'Welcome to Celsius'.toUpperCase()}</Text>
        <Text style={styles.text}>
          A new global financial platform that seamlessly connects holders of crypto-assets with
          borrowers. Earn fees on your assets by allowing financial traders to borrow them.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1
  },
  header: {
    fontSize: 32,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    padding: 30,
    lineHeight: 20
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    marginLeft: 30,
    marginBottom: 80,
    marginTop: 70
  }
})
