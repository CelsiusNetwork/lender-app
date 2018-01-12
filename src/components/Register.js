import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity} from 'react-native'
import {Button, Form, Input, Item, Label, Text, Content, Container} from 'native-base'
import { updateRegisterForm, registerLender } from '../actions'

class Register extends Component {
  componentWillUnmount() {
    // clear form data and errors
    this.props.updateRegisterForm()
  }

  onFirstNameChange (text) {
    this.updateField('firstName', text)
  }

  onLastNameChange (text) {
    this.updateField('lastName', text)
  }

  onEmailChange (text) {
    this.updateField('email', text)
  }

  onPasswordChange (text) {
    this.updateField('password', text)
  }

  onPhoneNumberChange (text) {
    this.updateField('phoneNumber', text)
  }

  updateField (field, text) {
    const { registerForm, updateRegisterForm } = this.props
    registerForm[field] = text
    updateRegisterForm(registerForm)
  }

  onButtonPress () {
    const { registerLender, registerForm } = this.props
    const appToken = this.props.initToken
    console.log('onButtonPress()')
    registerLender(registerForm, appToken)
  }

  renderError () {
    const { error } = this.props
    console.log(error)
    if (error) { return (<Text style={styles.errorText}>{error}</Text>) }
    return <View />
  }

  render () {
    const { loading, navigation, registerForm} = this.props
    const { firstName, lastName, email, password, phoneNumber } = registerForm
    const { navigate } = navigation

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
                  <Label style={{color: '#9CA9B6', fontSize: 18}}>First Name</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onFirstNameChange.bind(this)}
                    value={firstName}
                    autoCorrect={false}
                    highlightColor='#00ACC1' // cyan600
                    autoFocus autoCapitalize='none' />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#9CA9B6', fontSize: 18}}>Last Name</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onLastNameChange.bind(this)}
                    value={lastName}
                    autoCorrect={false}
                    autoCapitalize='none' />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#9CA9B6', fontSize: 18}}>Your email</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onEmailChange.bind(this)}
                    value={email}
                    keyboard-type='email-address'
                    autoCorrect={false}
                    autoCapitalize='none' />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#9CA9B6', fontSize: 18}}>Password</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={password}
                    secureTextEntry returnKeyType='done' autoCorrect={false} />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#9CA9B6', fontSize: 18}}>Phone number</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onPhoneNumberChange.bind(this)}
                    value={phoneNumber}
                    autoCorrect={false}
                    autoCapitalize='none' />
                </Item>
                {this.renderError()}
                <Button
                  style={styles.button}
                  onPress={this.onButtonPress.bind(this)}
                  // onPress={() => navigate('VerifyPhoneNumber')}
                  block primary>
                  { loading ? (
                    <Image source={require('../../assets/images/animated_spinner.gif')} style={styles.loader} />
                  ) : (
                    <Text style={styles.buttonText}>Verify your profile</Text>
                  )}
                </Button>

              </Form>
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
    marginLeft: 25,
    marginBottom: 5,
    resizeMode: 'contain',
    marginTop: 10
  },
  formContainer: {
    marginTop: 100
  },
  floatingLabel: {
    color: '#9CA9B6'
  },
  floatingWrapper: {
    borderBottomWidth: 0
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 2,
    color: '#9CA9B6',
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
  },
  errorText: {
    marginLeft: 15,
    marginTop: 10,
    color: '#FF9494'
  },
  loader: {
    width: 30,
    height: 30,
  }
})

const mapStateToProps = state => {
  const { lender, initToken, nav } = state
  return {
    initToken: initToken.token,
    registerForm: lender.registerForm,
    error: lender.error,
    loading: lender.loading,
    nav: nav
  }
}

const mapDispatchToProps = {
  updateRegisterForm,
  registerLender
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
