import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Pages } from 'react-native-pages'
import Welcome from './Welcome'
import HowItWorks from './HowItWorks'

class WelcomePager extends Component {
  navigate () {
   
    console.log(this.props.navigate);
    
  }

  render () {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/images/background.png')} style={styles.background}>
             <View style={styles.container}>
        <View>
          <Image source={require('../../../assets/images/logo-header.png')} style={styles.logo} />
            {/* <View style={styles.circleWrapper}>
              <Image source={require('../../../assets/images/arrow-left.png')} style={styles.aLeft} />
              <Image source={require('.../../../assets/images/how-it-works.png')} style={styles.circle} />
              <Image source={require('../../../assets/images/arrow-right.png')} style={styles.aRight} />
            </View> */}
            <Text style={styles.header}>{'How it works?'.toUpperCase()}</Text>
            <Text style={styles.text}>To join our trusted community of members, you need to create Celsius account from which you will be able to lend and borrow money.</Text>
            <TouchableOpacity style={styles.button} onPress={this.navigate.bind(this)}>
              <Text style={styles.buttonText} onPress={this.navigate.bind(this)}>Create account</Text>
            </TouchableOpacity>
        </View>
      </View>
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
    loading: state.auth.loading,
    error: state.auth.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePager)
