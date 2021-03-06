import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import {Pages} from 'react-native-pages'
import {lenderAppInitToken} from '../actions'

import VerifyPhoneNumber from './VerifyPhoneNumber'
import VerifyDocument from './VerifyDocument'
import VerifyPhoto from './VerifyPhoto'
import Agree from './Agree'

class Verification extends Component {
  constructor () {
    super()
    this.state = {
      progress: 0,
      progressLine: '0%',
      step: 1,
      btnTxt: 'Add your ID',
      stepName: 'VERIFY PHONE NUMBER'
    }
  }

  scrolled () {
    const progress = this.state.progress + 25
    this.setState({progress: progress})
    this.setState({progressLine: progress + '%'})
    this.setState({btnTxt: 'Take a photo'})
    const currentStep = this.state.step
    if (currentStep === 1) {
      this.setState({btnTxt: 'Take a photo'})
      this.setState({stepName: 'DOCUMENT CHECK'})
    }
    if (currentStep === 2) {
      this.setState({btnTxt: 'Finish verification'})
      this.setState({stepName: 'TAKE A PICTURE'})
    }
    if (currentStep === 3) {
      this.setState({btnTxt: 'Im done!'})
      this.setState({stepName: 'JUST ONE MORE THING...'})
    }
    this.setState({step: currentStep + 1})
  }

  // Rendering methods
  renderButtons () {
    const {navigate} = this.props.navigation
    if (this.state.step === 4) {
      return (
        <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
          <Text style={styles.buttonText}>{this.state.btnTxt}</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={styles.button} onPress={() => this.refs.kungfoo.scrollToPage(this.state.step)}>
          <Text style={styles.buttonText}>{this.state.btnTxt}
          </Text>
          <Image style={styles.buttonIcon}
            source={require('../assets/images/icon-arrow.png')}
          />
        </TouchableOpacity>
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            <Text style={styles.header}>{this.state.stepName}</Text>
            <ImageBackground source={require('../assets/images/progress-line-bg.png')} style={styles.line}>
              <ImageBackground source={require('../assets/images/progress-line.png')}
                style={[styles.lineInner, {width: this.state.progressLine}]} />
            </ImageBackground>
            <Pages
              scrollEnabled={false}
              onScrollEnd={this.scrolled.bind(this)}
              indicatorPosition='none'
              ref='kungfoo'>
              <VerifyPhoneNumber />
              <VerifyDocument />
              <VerifyPhoto />
              <Agree />
            </Pages>
            {this.renderButtons()}
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0
  },
  background: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  aCenter: {
    alignItems: 'center'
  },
  line: {
    borderRadius: 2,
    height: 4,
    marginBottom: 10,
    marginRight: 38,
    marginLeft: 38,
    overflow: 'hidden'
  },
  lineInner: {
    width: '33%',
    borderRadius: 2,
    height: 4
  },
  logo: {
    marginTop: 40,
    marginLeft: 30,
    width: 140,
    height: 40
  },
  header: {
    fontSize: 38,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 54,
    fontFamily: 'barlow-bold'
  },
  mobileWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  mobile: {
    marginTop: 20
  },
  inputWrapper: {
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 0,
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 70,
    textAlign: 'center'
  },
  inputDash: {
    height: 2
  },
  text: {
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9ca9b7',
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 20,
    textAlign: 'center'

  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 46,
    flexDirection: 'row'
  },
  buttonIcon: {
    width: 11,
    height: 22,
    resizeMode: 'contain',
    marginLeft: 15
  },
  buttonText: {
    color: '#333333',
    fontFamily: 'barlow-medium',
    fontSize: 21
  }
})

const mapStateToProps = state => {
  return {
    nav: state.nav
  }
}

const mapDispatchToProps = {
  lenderAppInitToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Verification)
