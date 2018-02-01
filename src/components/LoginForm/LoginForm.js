import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import deepmerge from 'deepmerge'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text} from 'react-native'
import {Button, Form, Input, Item, Label, Content, Container} from 'native-base'
import {loginEmailChanged, loginPasswordChanged, loginLender} from '../../actions/index'

import screenRawStyles from './LoginForm.styles'
import globalRawStyles from '../../assets/styles/global.styles'

const rawStyles = deepmerge(globalRawStyles, screenRawStyles)
const styles = StyleSheet.create(rawStyles)

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  // Event Handlers
  onEmailChange (text) {
    this.props.loginEmailChanged(text)
  }

  onPasswordChange (text) {
    this.props.loginPasswordChanged(text)
  }

  onButtonPress () {
    const {email, password} = this.props
    this.props.loginLender({email, password})
  }

  // Render methods
  renderError () {
    if (this.props.error !== '') {
      return (<Text style={styles.errorText}>{this.props.error}</Text>)
    }
    return <View />
  }

  render () {
    const { email, password, navigation, loading } = this.props
    const { navigate } = navigation

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background.png')} style={styles.background}>
          <Container style={styles.formContainer}>
            <Content>

              <TouchableOpacity onPress={() => navigate('Welcome')}>
                <Image source={require('../../assets/images/Celsius_Symbol_white.png')} style={styles.logo} />
              </TouchableOpacity>

              <Form style={styles.form}>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#ffffff', fontSize: 12}}>E-MAIL</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onEmailChange}
                    value={email}
                    keyboard-type='email-address'
                    autoCorrect={false}
                    autoFocus autoCapitalize='none' />
                </Item>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#ffffff', fontSize: 12}}>PASSWORD</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onPasswordChange}
                    value={password}
                    secureTextEntry returnKeyType='done' autoCorrect={false} />
                </Item>

                {this.renderError()}

                <Button style={styles.button} onPress={this.onButtonPress} block primary>
                  {loading ? (
                    <Image source={require('../../assets/images/animated_spinner.gif')} style={styles.loader} />
                  ) : (
                    <Text style={styles.buttonText}>Log in</Text>
                  )}
                </Button>

                <View>
                  <Text style={styles.forgetPassword} onPress={() => navigate('ForgotPassword')}>
                    Forgot password?
                  </Text>
                </View>
              </Form>
            </Content>
          </Container>
        </ImageBackground>
      </View>
    )
  }
}

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    email: 'branislav@celsius.network',
    password: 'test42!',
    // email: state.auth.email,
    // password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error
  }
}

const mapDispatchToProps = {
  loginEmailChanged, loginPasswordChanged, loginLender
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
