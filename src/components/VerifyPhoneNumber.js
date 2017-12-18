import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Content, Container, ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Form, Input, Item, Label } from 'native-base'
import { NavigationActions } from 'react-navigation'

class VerifyPhoneNumber extends Component {
  navigate () {

  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            {/* <Image source={require('../../assets/images/logo-header.png')} style={styles.logo} /> */}
            <Text style={styles.header}>{'Verify phone number'.toUpperCase()}</Text>
            <ImageBackground source={require('../../assets/images/progress-line-bg.png')} style={styles.line}>
              <ImageBackground source={require('../../assets/images/progress-line.png')} style={styles.lineInner}></ImageBackground>
            </ImageBackground>
            <View style={styles.aCenter}>
              <View style={styles.mobileWrapper}>
                <Image source={require('../../assets/images/icon-mobile.png')} style={styles.mobile} />
              </View>
              <Text style={styles.text}>Phone number enables you 2-factor authentication. Please enter the code we’ve sent you via SMS.</Text>
              <View style={styles.inputWrapper}>
                <Input
                  style={styles.input}
                  keyboardType='numeric'
                  maxLength={6}
                  // placeholder='_ _ _ _ _ _'
                  returnKeyType='done' autoCorrect={false} />
                  <Image source={require('../../assets/images/dash-line.png')} style={styles.inputDash} />
              </View>
            </View>
            <TouchableOpacity style={styles.button}
            onPress={() => navigate('VerifyDocument')}
          >
            <Text style={styles.buttonText}>Add your ID</Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    // justifyContent: 'top',
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  body: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  aCenter: {
    alignItems: 'center'
  },
  line: {
    height: 10,
    borderRadius: 2,
    height: 4,
    marginBottom: 10
  },
  lineInner: {
    width: '33%',
    borderRadius: 2,
    height: 4
  },
  logo: {
    // flex: 1,
    // position: 'absolute',
    marginTop: 40,
    marginLeft: 30,
    width: 140,
    height: 40,
  },
  header: {
		fontSize: 32,
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'white',
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
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
    textAlign: 'center',
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
    marginLeft: 30
  },
  buttonText: {
    color: '#333333'
  }
})

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhoneNumber)
