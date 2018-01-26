import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native'
import { Button, Form, Input, Item, Label, Spinner, Content, Container } from 'native-base'
import { loginEmailChanged, loginPasswordChanged, loginLender } from '../actions'

class ForgotPassword extends Component {
  // Event Handlers
  onEmailChange (text) {
    this.props.emailChanged(text)
  }

  // Render methods
  renderButton () {
    const { navigate } = this.props.navigation

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

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
          <Container style={styles.formContainer}>
            <Content>
              <TouchableOpacity
                onPress={() => navigate('Welcome')}>
                <Image source={require('../assets/images/Celsius_Symbol_white.png')} style={styles.logo} />
              </TouchableOpacity>
              <Text style={styles.header}>FORGOT PASSWORD</Text>
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
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 35,
    marginBottom: 15,
    marginTop: 30
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
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
    padding: 10
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
  loginEmailChanged,
  loginPasswordChanged,
  loginLender
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
