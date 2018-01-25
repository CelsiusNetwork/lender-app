import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity} from 'react-native'
import {Button, Form, Input, Item, Label, Text, Content, Container} from 'native-base'
import { updateRegisterForm, registerLender } from '../actions'

const LABEL_TEXTS = {
  firstNameActive: 'FIRST NAME',
  firstNameInactive: 'First Name',
  lastNameActive: 'LAST NAME',
  lastNameInactive: 'Last Name',
  emailActive: 'EMAIL',
  emailInactive: 'your@email.sample',
  passwordActive: 'PASSWORD',
  passwordInactive: '********',
  phoneNumberActive: 'PHONE NUMBER',
  phoneNumberInactive: '+1 ... ... ....'
}

class Register extends Component {
  constructor (props) {
    super(props)

    this.state = {
      labels: {
        firstName: LABEL_TEXTS.firstNameActive,
        lastName: !props.registerForm.lastName ? LABEL_TEXTS.lastNameInactive : LABEL_TEXTS.lastNameActive,
        email: !props.registerForm.email ? LABEL_TEXTS.emailInactive : LABEL_TEXTS.emailActive,
        password: !props.registerForm.password ? LABEL_TEXTS.passwordInactive : LABEL_TEXTS.passwordActive,
        phoneNumber: !props.registerForm.phoneNumber ? LABEL_TEXTS.phoneNumberInactive : LABEL_TEXTS.phoneNumberActive
      },
      fields: {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        password: 'password',
        phoneNumber: 'phoneNumber'
      },
      passHidden: true
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this)
  }

  componentWillUnmount () {
    // clear form data and errors
    this.props.updateRegisterForm()
  }

  handleInputChange (fieldName, text) {
    const { registerForm, updateRegisterForm } = this.props
    registerForm[fieldName] = text
    updateRegisterForm(registerForm)
  }

  handleInputFocus (fieldName) {
    const { labels } = this.state

    let label = {}
    label[fieldName] = LABEL_TEXTS[`${fieldName}Active`]

    this.setState({
      labels: {
        ...labels,
        ...label
      }
    })
  }

  handleInputBlur (fieldName) {
    const { labels } = this.state
    const { registerForm } = this.props

    let label = {}
    if (registerForm[fieldName]) {
      label[fieldName] = LABEL_TEXTS[`${fieldName}Active`]
    } else {
      label[fieldName] = LABEL_TEXTS[`${fieldName}Inactive`]
    }

    this.setState({
      labels: {
        ...labels,
        ...label
      }
    })
  }

  togglePasswordVisibility () {
    console.log('toggling')
    this.setState({ passHidden: !this.state.passHidden })
  }

  getLabelStyles (fieldName) {
    const { labels } = this.state

    if (labels[fieldName] === LABEL_TEXTS[`${fieldName}Active`]) {
      return {
        color: '#9CA9B6',
        fontSize: 12,
        top: 0
      }
    } else {
      return {
        color: '#9CA9B6',
        fontSize: 21,
        top: -3
      }
    }
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
    const { labels, fields, passHidden } = this.state
    const { loading, navigation, registerForm} = this.props
    const { firstName, lastName, email, password, phoneNumber } = registerForm
    const { navigate } = navigation

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
          <Container style={styles.formContainer}>
            <TouchableOpacity
              onPress={() => navigate('Welcome')}>
              <Image source={require('../assets/images/logo-header.png')} style={styles.logo} />
            </TouchableOpacity>
            <Content>
              <Form style={styles.form}>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={this.getLabelStyles(fields.firstName)}>{ labels.firstName }</Label>
                  <Input
                    style={styles.input}
                    onChangeText={(text) => this.handleInputChange(fields.firstName, text)}
                    onFocus={() => this.handleInputFocus(fields.firstName)}
                    onBlur={() => this.handleInputBlur(fields.firstName)}
                    keyboardAppearance='dark'
                    value={firstName}
                    autoCorrect={false}
                    highlightColor='#00ACC1' // cyan600
                    autoFocus autoCapitalize='none' />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={this.getLabelStyles(fields.lastName)}>{ labels.lastName }</Label>
                  <Input
                    style={styles.input}
                    onChangeText={(text) => this.handleInputChange(fields.lastName, text)}
                    onFocus={() => this.handleInputFocus(fields.lastName)}
                    onBlur={() => this.handleInputBlur(fields.lastName)}
                    keyboardAppearance='dark'
                    value={lastName}
                    autoCorrect={false}
                    autoCapitalize='none' />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={this.getLabelStyles(fields.email)}>{ labels.email }</Label>
                  <Input
                    style={styles.input}
                    onChangeText={(text) => this.handleInputChange(fields.email, text)}
                    onFocus={() => this.handleInputFocus(fields.email)}
                    onBlur={() => this.handleInputBlur(fields.email)}
                    keyboardAppearance='dark'
                    value={email}
                    keyboard-type='email-address'
                    autoCorrect={false}
                    autoCapitalize='none' />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={this.getLabelStyles(fields.password)}>{ labels.password }</Label>
                  <Input
                    style={styles.input}
                    onChangeText={(text) => this.handleInputChange(fields.password, text)}
                    onFocus={() => this.handleInputFocus(fields.password)}
                    onBlur={() => this.handleInputBlur(fields.password)}
                    keyboardAppearance='dark'
                    value={password}
                    secureTextEntry={passHidden}
                    returnKeyType='done' autoCorrect={false} />
                </Item>
                { registerForm.password ? (
                  <TouchableOpacity onPress={this.togglePasswordVisibility} style={styles.eyeIconButton} >
                    <Image
                      source={require('../assets/images/icon-show.png')}
                      style={styles.eyeIcon}
                      resizeMode='contain' />
                  </TouchableOpacity>
                ) : null }
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={this.getLabelStyles(fields.phoneNumber)}>{ labels.phoneNumber }</Label>
                  <Input
                    style={styles.input}
                    onChangeText={(text) => this.handleInputChange(fields.phoneNumber, text)}
                    onFocus={() => this.handleInputFocus(fields.phoneNumber)}
                    onBlur={() => this.handleInputBlur(fields.phoneNumber)}
                    keyboardAppearance='dark'
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
                    <Image source={require('../assets/images/animated_spinner.gif')} style={styles.loader} />
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
    width: 128,
    height: 40,
    left: 30,
    top: 10,
    marginBottom: 10,
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
    marginBottom: 20,
    fontSize: 21
  },
  eyeIconButton: {
    position: 'absolute',
    top: 270,
    right: 10,
    width: 20,
    height: 20,
    backgroundColor: 'transparent'
  },
  eyeIcon: {
    width: 20,
    height: 20
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
    marginRight: 20,
    paddingTop: 20
  },
  errorText: {
    marginLeft: 15,
    marginTop: 10,
    color: '#FF9494'
  },
  loader: {
    width: 30,
    height: 30
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
  registerLender,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
