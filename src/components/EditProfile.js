import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Button, Form, Input, Item, Label, Text, Content, Header, Title, Container } from 'native-base'
import { registerFirstNameChanged, registerLastNameChanged, registerEmailChanged, registerPasswordChanged, registerPhoneNumberChanged, registerLender } from '../actions'

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
        firstName: "Alex",
        lastName: "Johnson",
        email: "alex.johnson@gmail.com",
        password: "123456",
        passcode: "1111",
        phoneNumber: "+1 213 221 49 51"
      }
  }

  onFirstNameChange (text) {
    this.props.registerFirstNameChanged(text)
  }

  onLastNameChange (text) {
    this.props.registerLastNameChanged(text)
  }

  onEmailChange (text) {
    this.props.registerEmailChanged(text)
  }

  onPasswordChange (text) {
    this.props.registerPasswordChanged(text)
  }

  onPhoneNumberChange (text) {
    this.props.registerPhoneNumberChanged(text)
  }

  onButtonPress (firstName, lastName, email, password, phoneNumber) {
    // this.props.registerLender({ firstName, lastName, email, password, phoneNumber })

  }

  render () {
    const { navigate } = this.props.navigation
    const firstName = this.props.name
    const lastName = this.props.surname
    const email = this.props.email
    const phoneNumber = this.props.phoneNumber
    const profilePicture = this.props.picture
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            {/* <Image source={require('../../assets/images/logo-header.png')} style={styles.logo} /> */}
            <Text style={styles.header}>{'Edit Profile'.toUpperCase()}</Text>
            <View style={styles.avatarSection}>
              <View style={styles.pts}>
                <Image source={require('../../assets/images/icon-score.png')} style={styles.score} />
                <Text style={styles.ptsText}>2559</Text>
                <Text style={styles.ptsTextExt}>pts</Text>
              </View>
              <ImageBackground source={require('../../assets/images/avatar-wrapper.png')} style={styles.avatarWrapper}>
                <ImageBackground source={{uri:profilePicture}} style={styles.avatar}>
                </ImageBackground>
              </ImageBackground>
            </View>
            <Container>
              <Content>
                <Form style={styles.form}>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: 'rgba(156, 169, 182, 0.5)', fontSize: 12}}>{'First Name'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onFirstNameChange.bind(this)}
                      value={firstName}
                      autoCorrect={false}
                      highlightColor="#00ACC1" // cyan600
                      autoFocus autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: 'rgba(156, 169, 182, 0.5)', fontSize: 12}}>{'Last Name'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onLastNameChange.bind(this)}
                      value={lastName}
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: 'rgba(156, 169, 182, 0.5)', fontSize: 12}}>{'Your email'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onEmailChange.bind(this)}
                      value={email}
                      keyboard-type='email-address'
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: 'rgba(156, 169, 182, 0.5)', fontSize: 12}}>{'Password'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onPasswordChange.bind(this)}
                      value={this.state.password}
                      secureTextEntry returnKeyType='done' autoCorrect={false} />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: 'rgba(156, 169, 182, 0.5)', fontSize: 12}}>{'Passcode'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      // onChangeText={this.onPasswordChange.bind(this)}
                      value={this.state.passcode}
                      secureTextEntry returnKeyType='done' autoCorrect={false} />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: 'rgba(156, 169, 182, 0.5)', fontSize: 12}}>{'Phone number'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onPhoneNumberChange.bind(this)}
                      value={phoneNumber}
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  {this.renderError()}
                  <View style={[{marginBottom: 70}, styles.row]}>
                    <View style={styles.cellLeft}>
                      <Button
                        style={styles.button}
                        // onPress={this.onButtonPress.bind(this)}
                        onPress={() => navigate('VerifyPhoneNumber')}
                        block primary>
                        <Text
                          style={styles.buttonText}
                        >Save</Text>
                      </Button>
                    </View>
                    <View style={styles.cellRight}>
                      <Button
                        style={styles.button2}
                        // onPress={this.onButtonPress.bind(this)}
                        onPress={() => this.props.navigation.goBack()}
                        // block primary
                        >
                        <Text
                          style={styles.buttonText2}
                        >Cancel</Text>
                      </Button>
                    </View>
                  </View>
                </Form>

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
		marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  formContainer: {
    marginTop: 100,
    marginBottom: 20
  },
  floatingLabel: {
    color: '#9CA9B6',
    fontSize: 12
  },
  label: {
    // color: '#9CA9B6',
    fontSize: 12
  },
  floatingWrapper: {
    borderBottomWidth: 0,
  },
  input: {
    height: 40,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 2,
    color: '#ffffff',
    marginBottom: 10,
    marginRight: 15,
    paddingTop: 10,
    fontSize: 14
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 30,
    // marginLeft: 30,
    marginTop: 30,
    width: '95%'
  },
  button2: {
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
    marginTop: 30,
    width: '95%'
  },
  buttonText: {
    color: '#333333'
  },
  buttonText2: {
    color: '#ffffff'
  },
  form: {
    marginLeft: 20,
    marginRight: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    // borderTopColor: 'rgba(255, 255, 255, 0.1)',
    // borderTopWidth: 2
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
    height: 40,
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    height: 40,
  },
  avatarSection: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
  avatarWrapper: {
    width: 196,
    height: 196,
    alignItems: 'center'
  },
  avatar: {
    marginTop: 8,
    width: 180,
    height: 180
  },
  pts: {
    width: 100,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 15,
    position: 'absolute',
    zIndex: 5,
    bottom: 10,
    right: 50,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  ptsText: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: '#3D4853',
    fontSize: 18,
    marginTop: 5,
    marginRight: 3
  },
  ptsTextExt: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    fontSize: 12,
    color: '#3D4853',
    marginTop: 10,
  },
  score: {
    width: 16,
    height: 16,
    marginTop: 7,
    marginRight: 3,
    marginLeft: 7
  }
})

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    name: state.lender.name,
    surname: state.lender.surname,
    email: state.auth.email,
    authId: state.auth.authId,
    walletAddress: state.lender.walletAddress,
    lender: state.lender,
    ethBalance: state.wallet.ethBalance,
    celBalance: state.wallet.celBalance,
    picture: state.lender.lender.picture,
    error: state.register.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {
  registerFirstNameChanged, registerLastNameChanged, registerEmailChanged, registerPasswordChanged, registerPhoneNumberChanged, registerLender
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
