import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
import { Button, Form, Input, Item, Label, Text, Spinner, Content, Header, Title, Container } from 'native-base'
import { loginEmailChanged, loginPasswordChanged, loginLender } from '../actions'

let Code = "1111"

var Vibration = require('react-native-vibration');

class Passcode extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      enterCode: "",
      color: 'rgba(255, 255, 255, 0.0)'
    };
  }

  _onPressButton(index) {
    // console.log(index)
    this.state.count++
    this.state.enterCode = this.state.enterCode+index;
    if(this.state.count == 4){
      if(this.state.enterCode == Code){
        Alert.alert('Valid Passcode')
      } else {
        Vibration.vibrate(500);
      }
      this.state.count = 0
      this.state.enterCode = ""
    }
    this.state.color = 'rgba(255, 255, 255, 0.6)'
    // Alert.alert('Color: '+this.state.color)
  }

  renderError () {
    if (this.props.error !== '') { return (<Text style={styles.errorText}>{this.props.error}</Text>) }
    return <View />
  }

  onEmailChange (text) {
    this.props.emailChanged(text)
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text)
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background.png')} style={styles.background}>
          <Container style={styles.wrapper}>
            <Content>
              <View style={styles.aCenter}>
                <Image source={require('../../assets/images/logo-small.png')} style={styles.logo} />
                <Text style={styles.text}>Touch ID or Enter Passcode</Text>
                <Text style={styles.text}>"{this.state.enterCode}"</Text>
              </View>

              <View style={styles.aCenter}>
                <View style={styles.dotRow}>
                  <View style={styles.dotCell}>
                    <View style={[styles.dot, {backgroundColor: this.state.color}]}></View>
                  </View>
                  <View style={styles.dotCell}>
                    <View style={[styles.dot, {backgroundColor: this.state.color}]}></View>
                  </View>
                  <View style={styles.dotCell}>
                    <View style={[styles.dot, {backgroundColor: this.state.color}]}></View>
                  </View>
                  <View style={styles.dotCell}>
                    <View style={[styles.dot, {backgroundColor: this.state.color}]}></View>
                  </View>
                </View>

                <View style={styles.row}>
                  <View
                    style={styles.aLeft}><TouchableOpacity onPress={ this._onPressButton.bind(this, 1) } style={styles.circle}><Text style={styles.circleText}>1</Text></TouchableOpacity>
                  </View>
                  <View
                    style={styles.aMiddle}><TouchableOpacity onPress={ this._onPressButton.bind(this, 2) } style={styles.circle}><Text style={styles.circleText}>2</Text></TouchableOpacity>
                  </View>
                  <View
                    style={styles.aRight}><TouchableOpacity onPress={ this._onPressButton.bind(this, 3) } style={styles.circle}><Text style={styles.circleText}>3</Text></TouchableOpacity>
                  </View>
                </View>

                <View style={styles.row}>
                  <View
                    style={styles.aLeft}><TouchableOpacity onPress={ this._onPressButton.bind(this, 4) } style={styles.circle}><Text style={styles.circleText}>4</Text></TouchableOpacity>
                  </View>
                  <View
                    style={styles.aMiddle}><TouchableOpacity onPress={ this._onPressButton.bind(this, 5) } style={styles.circle}><Text style={styles.circleText}>5</Text></TouchableOpacity>
                  </View>
                  <View
                    style={styles.aRight}><TouchableOpacity onPress={ this._onPressButton.bind(this, 6) } style={styles.circle}><Text style={styles.circleText}>6</Text></TouchableOpacity>
                  </View>
                </View>

                <View style={styles.row}>
                  <View
                    style={styles.aLeft}><TouchableOpacity onPress={ this._onPressButton.bind(this, 7) } style={styles.circle}><Text style={styles.circleText}>7</Text></TouchableOpacity>
                  </View>
                  <View
                    style={styles.aMiddle}><TouchableOpacity onPress={ this._onPressButton.bind(this, 8) } style={styles.circle}><Text style={styles.circleText}>8</Text></TouchableOpacity>
                  </View>
                  <View
                    style={styles.aRight}><TouchableOpacity onPress={ this._onPressButton.bind(this, 9) } style={styles.circle}><Text style={styles.circleText}>9</Text></TouchableOpacity>
                  </View>
                </View>

                <View style={styles.row}>
                  <View
                    style={styles.aLeft}>
                  </View>
                  <View
                    style={styles.aMiddle}><TouchableOpacity onPress={ this._onPressButton.bind(this, 0) } style={styles.circle}><Text style={styles.circleText}>0</Text></TouchableOpacity>
                  </View>
                  <View
                    style={styles.aRight}>
                  </View>
                </View>

                <View style={styles.row}>
                  <View
                    style={styles.aLeft}>
                    <Text style={styles.bottomText}>Forgot?</Text>
                  </View>
                  <View
                    style={styles.aMiddle}>
                  </View>
                  <View
                    style={styles.aRight}>
                    <Text
                      style={styles.bottomText}
                      onPress={() => navigate('WelcomePager')}
                    >Log out</Text>
                  </View>
                </View>

                {this.renderError()}
              </View>
            </Content>
          </Container>
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
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    // position: 'absolute',
    width: 30,
    height: 30,
    // marginLeft: 35,
    marginBottom: 30,
    marginTop: 30
  },
  aCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#a3b0be',
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 20
  },
  wrapper: {
    flex: 1,
    // width: '100%',
    marginTop: 50,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  circle: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center'
  },
  circleText: {
    color: '#ffffff',
    fontSize: 38,
    paddingTop: 10
  },
  aLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  aRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10
  },
  aMiddle: {
    borderRadius: 30,
    borderRadius: 40,
  },
  dotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    marginLeft: 30,
    marginRight: 30
  },
  dotCell: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderColor: '#ffffff',
    borderWidth: 0.5,
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 20
  },
  bottomText: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#a3b0be',
    padding: 10,
  },
  errorText: {
    padding: 5,
    color: '#ea0021'
  }
})

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {
  loginEmailChanged, loginPasswordChanged, loginLender
}

export default connect(mapStateToProps, mapDispatchToProps)(Passcode)
