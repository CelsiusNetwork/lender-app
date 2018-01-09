import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Button, Form, Input, Item, Label, Text, Content, Header, Title, Container } from 'native-base'
import { registerFirstNameChanged, registerLastNameChanged, registerEmailChanged, registerPasswordChanged, registerPhoneNumberChanged, registerLender } from '../actions'
import { Font } from 'expo';
import { NavigationActions } from 'react-navigation'

class AddFounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded: false,
        eth: 6.350,
      }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'inconsolata': require('../../assets/fonts/Inconsolata-Regular.ttf'),
    });
    await Font.loadAsync({
      'barlow-semi-bold': require('../../assets/fonts/Barlow-SemiBold.otf'),
    });
    await Font.loadAsync({
      'barlow-light': require('../../assets/fonts/Barlow-Light.otf'),
    });
    await Font.loadAsync({
      'barlow': require('../../assets/fonts/Barlow-Regular.otf'),
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
                <Text style={styles.header}>{this.state.eth} {'ETH'.toUpperCase()}</Text>
                <Form style={styles.form}>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>{'to'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      // onChangeText={this.onFirstNameChange.bind(this)}
                      value={this.state.to}
                      autoCorrect={false}
                      // highlightColor="#00ACC1" // cyan600
                      autoFocus autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>{'note'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      // onChangeText={this.onLastNameChange.bind(this)}
                      value={this.state.note}
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  <TouchableOpacity
                      style={styles.QRCodeWrapper}
                      onPress={() => navigate('QRScanner')}
                      // onPress={() => navigate('VerifyPhoneNumber')}
                      >
                      <Image source={require('../../assets/images/icon-scan-qrcode.png')} style={styles.QRCode} />
                    </TouchableOpacity>

                </Form>
                <View style={styles.center}>
                  <TouchableOpacity style={styles.button} onPress={() => navigate('ManageFoundsSuccess')}>
                    <Text style={styles.buttonText}>
                      Confirm withdraw
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
		fontSize: 34,
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'white',
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 0,
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 21,
    paddingRight: 40
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#333333'
  },
  form: {
    marginLeft: 20,
    marginRight: 20,
  },
  floatingLabel: {
    color: '#9CA9B6',
    fontSize: 12
  },
  label: {
    // color: '#9CA9B6',
    // fontSize: 12
  },
  center: {
    // flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: 50,
  },
  floatingWrapper: {
    position: 'relative'
  },
  QRCodeWrapper: {
    position: 'absolute',
    top: 35,
    right: 5
  },
  QRCode: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  buttonIcon: {
    position: 'absolute',
    left: 50,
    top: 15,
    width: 20,
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
