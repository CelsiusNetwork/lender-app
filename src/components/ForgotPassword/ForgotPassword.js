import React, { Component } from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native'
import { Button, Form, Input, Item, Label, Content, Container } from 'native-base'
import { loginEmailChanged } from '../../actions/index'

import screenRawStyles from './ForgotPassword.styles'
import globalRawStyles from '../../assets/styles/global.styles'

const rawStyles = deepmerge(globalRawStyles, screenRawStyles)
const styles = StyleSheet.create(rawStyles)

class ForgotPassword extends Component {
  constructor (props) {
    super(props)

    this.onEmailChange = this.onEmailChange.bind(this)
  }
  // Event Handlers
  onEmailChange (text) {
    this.props.loginEmailChanged(text)
  }

  // Render methods
  renderError () {
    const { error } = this.props
    if (error !== '') {
      return <Text style={styles.errorText}>{error}</Text>
    }
    return <View />
  }

  render () {
    const { navigation, email } = this.props
    const { navigate } = navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background.png')} style={styles.background}>
          <Container style={styles.formContainer}>
            <Content>
              <TouchableOpacity onPress={() => navigate('Welcome')}>
                <Image source={require('../../assets/images/Celsius_Symbol_white.png')} style={styles.logo} />
              </TouchableOpacity>

              <Text style={styles.header}>FORGOT PASSWORD</Text>

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

                {this.renderError()}

                <Button style={styles.button} onPress={() => navigate('LoginForm')} block primary>
                  <Text style={styles.buttonText}>Reset my password</Text>
                </Button>
              </Form>
            </Content>
          </Container>
        </ImageBackground>
      </View>
    )
  }
}

ForgotPassword.propTypes = {
  email: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  navigation: PropTypes.object
}

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
  loginEmailChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
