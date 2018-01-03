import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Button, Form, Input, Item, Label, Text, Spinner, Content, Header, Title, Container } from 'native-base'
import { loginEmailChanged, loginPasswordChanged, loginLender } from '../actions'

class ForgotPassword extends Component {
  onButtonPress () {
    // this.props.loginUser({ email, password })
    console.log(this.props.navigation)
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner color='black' />
    }
    return (
      <Button
        style={styles.button}
        // onPress={this.onButtonPress.bind(this)}
        onPress={() => navigate('LoginForm')}
        block primary>
        <Text
          style={styles.buttonText}
        >Reset my password</Text>
      </Button>
    )
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
          <Container style={styles.formContainer}>
            <Content>
            <Image source={require('../../assets/images/logo-small.png')} style={styles.logo} />
              <Text style={styles.header}>{'Forgot Password'.toUpperCase()}</Text>
                <Form style={styles.form}>
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#ffffff', fontSize: 12}}>E-MAIL</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    keyboard-type='email-address'
                    autoCorrect={false}
                    autoFocus autoCapitalize='none' />
                </Item>

                {this.renderError()}
                {this.renderButton()}
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
    marginLeft: 35,
    marginBottom: 15,
    marginTop: 30
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#a3b0be',
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 20
  },
  createLink: {
    color: '#ffffff'
  },
  forgotPassword: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#a3b0be',
    padding: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  formContainer: {
    marginTop: 50
  },
  floatingLabel: {
    color: '#ffffff'
  },
  floatingWrapper: {
    borderBottomWidth: 0,
  },
  form: {
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 2,
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
