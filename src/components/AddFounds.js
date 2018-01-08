import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Button, Form, Input, Item, Label, Text, Content, Header, Title, Container } from 'native-base'
import { registerFirstNameChanged, registerLastNameChanged, registerEmailChanged, registerPasswordChanged, registerPhoneNumberChanged, registerLender } from '../actions'
import { Font } from 'expo';
import QRCode from 'react-native-qrcode';
import { Share } from 'react-native';
import { Clipboard } from 'react-native';

class AddFounds extends Component {

  onButtonPress () {
    // this.props.loginUser({ email, password })
    Share.share({
      message: 'Message',
      url: 'http://www.celsius.network',
      title: 'Title'
    }, {
      // Android only:
      dialogTitle: 'Message',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }

  onCopyButtonPress () {
    Clipboard.setString(this.state.qrcode);
  }

  constructor(props) {
    super(props);
    this.state = {
        fontLoaded: false,
        qrcode: "35McfMBsnPzY1c8G9bd2ZLzuDdLEkEx8Fd"
      }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'inconsolata': require('../../assets/fonts/Inconsolata-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            {/* <Image source={require('../../assets/images/logo-header.png')} style={styles.logo} /> */}
            <Container>
              <Content>
                <Text style={styles.header}>{'Add Funds'.toUpperCase()}</Text>
                <Text style={styles.text}>Transfer your funds from another Ethereum wallet to your Celsius account by sending ETH to your unique Celsius address.</Text>
                <View style={styles.center}>
                  <View style={styles.qrWrapper}>
                    <QRCode
                      value={this.state.qrcode}
                      size={160}
                      bgColor='black'
                      fgColor='white'/>
                  </View>
                </View>
                <Text style={styles.text}>Your Celsius ETH address:</Text>

                <View style={styles.codeWrapper}>
                  { this.state.fontLoaded ? (<Text style={[{ fontFamily: 'inconsolata' }, styles.codeText]}>{ this.state.qrcode }</Text>) : null }
                  <View style={styles.row}>
                    {/* <View style={styles.cellLeft}> */}
                      <TouchableOpacity style={[styles.cellLeft, styles.buttonLeft]} onPress={this.onButtonPress.bind(this)}>
                        <Image source={require('../../assets/images/icon-send.png')} style={styles.iconLeft} />
                        <Text style={styles.buttonLeftText}>Share</Text>
                      </TouchableOpacity>
                    {/* </View> */}
                    {/* <View style={styles.cellRight}> */}
                      <TouchableOpacity style={[styles.cellRight, styles.buttonRight]} onPress={this.onCopyButtonPress.bind(this)}>
                        <Image source={require('../../assets/images/icon-copy.png')} style={styles.iconRight} />
                        <Text style={styles.buttonRightText}>Copy</Text>
                      </TouchableOpacity>
                    {/* </View> */}
                  </View>
                </View>
                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={() => navigate('Home')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                      Done
                    </Text>
                  </TouchableOpacity>
                </View>
              </Content>
            </Container>
          </View>

        </ImageBackground>
      </View>

    )
  }

  renderError () {
    if (this.props.error !== '') { return (<Text style={styles.errorText}>{this.props.error}</Text>) }
    return <View />
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
    marginTop: 20
  },
  logo: {
    // position: 'absolute',
    width: 140,
    height: 40,
    marginLeft: 35,
    marginBottom: 5
  },
  header: {
		fontSize: 38,
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'white',
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#9CA9B6',
    marginLeft: 30,
    marginRight: 30
  },
  formContainer: {
    marginTop: 100
  },
  floatingLabel: {
    color: '#9CA9B6',
    fontSize: 12
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 30,
    // marginLeft: 30,
    marginTop: 10,
    width: 130
  },
  buttonText: {
    color: '#ffffff'
  },
  form: {
    marginLeft: 20,
    marginRight: 20
  },
  center: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: 50,
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginLeft: 10,
    height: 40,
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginRight: 10,
    height: 40,
  },
  qrWrapper: {
    width: 255,
    height: 255,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 45,
    marginTop: 20,
    marginBottom: 30
  },
  codeWrapper: {
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginRight: 30,
    marginLeft: 30,
    // paddingTop: 20,
    marginTop: 20,
    marginBottom: 20
  },
  codeText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10
  },
  buttonLeft: {
    position: 'relative',
    // width: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRightColor: '#3D4B54',
    borderRightWidth: 1,
    padding: 10,
    borderBottomLeftRadius: 8
  },
  buttonLeftText: {
    color: '#9CA9B6',
    textAlign: 'left',
    marginLeft: 50
  },
  buttonRight: {
    position: 'relative',
    // width: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    // borderRightColor: '#3D4B54',
    // borderRightWidth: 1,
    padding: 10,
    borderBottomRightRadius: 8
  },
  buttonRightText: {
    color: '#9CA9B6',
    textAlign: 'left',
    marginRight: 40
  },
  iconLeft: {
    position: 'absolute',
    left: 35,
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
  iconRight: {
    position: 'absolute',
    left: 35,
    width: 16,
    height: 16,
    resizeMode: 'contain'
  }
})

const mapStateToProps = state => {
  return {
    firstName: state.register.firstName,
    lastName: state.register.lastName,
    email: state.register.email,
    password: state.register.password,
    phoneNumber: state.register.phoneNumber,

    error: state.register.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {
  registerFirstNameChanged, registerLastNameChanged, registerEmailChanged, registerPasswordChanged, registerPhoneNumberChanged, registerLender
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFounds)
