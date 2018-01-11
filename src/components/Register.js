import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity} from 'react-native'
import {Button, Form, Input, Item, Label, Text, Content, Container} from 'native-base'
import {
  registerFirstNameChanged,
  registerLastNameChanged,
  registerEmailChanged,
  registerPasswordChanged,
  registerPhoneNumberChanged,
  registerLender
} from '../actions'

class Register extends Component {
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

  onButtonPress () {
    const appToken = this.props.initToken
    console.log('onButtonPress()')
    this.props.registerLender(this.props.firstName, this.props.lastName, this.props.email, this.props.password, this.props.phoneNumber, appToken)
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background.png')} style={styles.background}>
          <Container style={styles.formContainer}>
            <TouchableOpacity
              onPress={() => navigate('Welcome')}>
              <Image source={require('../../assets/images/logo-header.png')} style={styles.logo} />
            </TouchableOpacity>
            <Content>
              <Form style={styles.form}>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#ffffff'}}>First Name</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onFirstNameChange.bind(this)}
                    value={this.props.firstName}
                    autoCorrect={false}
                    highlightColor='#00ACC1' // cyan600
                    autoFocus autoCapitalize='none' />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#ffffff'}}>Last Name</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onLastNameChange.bind(this)}
                    value={this.props.lastName}
                    autoCorrect={false}
                    autoCapitalize='none' />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#ffffff'}}>Your email</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    keyboard-type='email-address'
                    autoCorrect={false}
                    autoCapitalize='none' />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#ffffff'}}>Password</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    secureTextEntry returnKeyType='done' autoCorrect={false} />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#ffffff'}}>Phone number</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onPhoneNumberChange.bind(this)}
                    value={this.props.phoneNumber}
                    autoCorrect={false}
                    autoCapitalize='none' />
                </Item>
                {this.renderError()}
                <Button
                  style={styles.button}
                  onPress={this.onButtonPress.bind(this)}
                  // onPress={() => navigate('VerifyPhoneNumber')}
                  block primary>
                  <Text
                    style={styles.buttonText}
                  >Register</Text>
                </Button>
              </Form>
            </Content>
          </Container>
        </ImageBackground>
      </View>
    )
  }

  renderError () {
    if (this.props.error !== '') {
      return (<Text style={styles.errorText}>{this.props.error}</Text>)
    }
    return <View />
  }
}

const styles = StyleSheet.create({
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
  },
  logo: {
    // position: 'absolute',
    width: 140,
    height: 40,
    marginLeft: 35,
    marginBottom: 5,
    resizeMode: 'contain'
  },
  formContainer: {
    marginTop: 100
  },
  floatingLabel: {
    color: '#ffffff'
  },
  floatingWrapper: {
    borderBottomWidth: 0
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 2,
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 14
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
    marginTop: 30
  },
  buttonText: {
    color: '#333333'
  },
  form: {
    marginLeft: 20,
    marginRight: 20
  }
})

const mapStateToProps = state => {
  return {
    initToken: state.initToken.token,
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
  registerFirstNameChanged,
  registerLastNameChanged,
  registerEmailChanged,
  registerPasswordChanged,
  registerPhoneNumberChanged,
  registerLender
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
