import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Image } from 'react-native'
import { Font } from 'expo';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded: false,
      }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'inconsolata': require('../../../assets/fonts/Inconsolata-Regular.ttf'),
    });
    await Font.loadAsync({
      'barlow-semi-bold': require('../../../assets/fonts/Barlow-SemiBold.otf'),
    });
    await Font.loadAsync({
      'barlow-light': require('../../../assets/fonts/Barlow-Light.otf'),
    });
    await Font.loadAsync({
      'barlow-bold': require('../../../assets/fonts/Barlow-Bold.otf'),
    });
    await Font.loadAsync({
      'barlow': require('../../../assets/fonts/Barlow-Regular.otf'),
    });
    this.setState({ fontLoaded: true });
  }

  render () {
    return (
      <View style={styles.slideContainer}>
        <View style={styles.circle}>
          <Image source={require('../../../assets/images/icon-cel.png')} style={styles.icon} />
        </View>
        { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow'}, styles.text]}>Celsius wallet is the first online crypto wallet designed to allow members to earn interest on deposited coins.</Text>) : null }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    alignItems: 'center',
  },
  icon: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 110,
    height: 110,
    // marginLeft: 15,
    marginBottom: 10,
    marginTop: 35,
    resizeMode: 'contain',
  }
})
