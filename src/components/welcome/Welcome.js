import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
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
      <View style={styles.welcomeContainer}>
        <Image source={require('../../../assets/images/Celsius_Symbol_white.png')} style={styles.logo} />
        { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow-bold'}, styles.header]}>WELCOME TO CELSIUS</Text>) : null }
        { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'barlow'}, styles.text]}>A new global financial platform that seamlessly connects holders of crypto-assets with borrowers. Earn fees on your assets by allowing financial traders to borrow them.</Text>) : null }
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
    fontSize: 38,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 25,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 18,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#9CA9B6',
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
