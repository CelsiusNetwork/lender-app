import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class Welcome extends Component {
  render () {
    return (
      <View style={styles.welcomeContainer}>
        <Image source={require('../../../assets/images/Celsius_Symbol_white.png')} style={styles.logo} />
        <Text style={styles.header}>WELCOME TO CELSIUS</Text>
        <Text style={styles.text}>
          Celsius is the first crypto wallet that allows users to earn interest on their held coins.
          Earn fees on your assets by allowing financial traders to borrow them.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1
  },
  header: {
    fontSize: 28,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 25,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#fefefe',
    padding: 30,
    paddingLeft: 25,
    lineHeight: 20
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    marginLeft: 15,
    marginBottom: 80,
    marginTop: 90
  }
})
