import React, { Component } from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

export default class Welcome extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <View style={styles.slideContainer}>
        <View style={styles.circle}>
          <Image source={require('../../assets/images/icon-community.png')} style={styles.icon} />
        </View>
        <Text style={[{fontFamily: 'barlow'}, styles.text]}>You can cash-out earned Degree Tokens anytime,
          and as more people join the Celsius ecosystem, the more everyone benefits.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#9CA9B6',
    paddingTop: 30,
    paddingBottom: 30,
    lineHeight: 20,
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center'
  },
  circle: {
    width: 186,
    height: 186,
    borderRadius: 193,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center'
  },
  icon: {
    width: 110,
    height: 110,
    marginBottom: 10,
    marginTop: 35,
    resizeMode: 'contain'
  }
})
