import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Button, Form, Input, Item, Label, Text, Spinner, Content, Header, Title, Container } from 'native-base'
import { loginEmailChanged, loginPasswordChanged, loginLender } from '../actions'
import { NavigationActions } from 'react-navigation'

class LoginForm extends Component {

  static navigationOptions = ( {navigation} ) => ({
    title: 'Login'
  })

  onEmailChange (text) {
    this.props.loginEmailChanged(text)
  }

  onPasswordChange (text) {
    this.props.loginPasswordChanged(text)
  }

  onButtonPress () {
    const { email, password } = this.props
    this.props.loginLender({ email, password })
  }

  renderError () {
    if (this.props.error !== '') { return (<Text style={styles.errorText}>{this.props.error}</Text>) }
    return <View />
  }

  render () {
    const { navigate } = this.props.navigation
    const { loading } = this.props

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background.png')} style={styles.background}>
          <Container style={styles.formContainer}>
            <Content>
              <TouchableOpacity
                onPress={() => navigate('Welcome')}>
                <Image source={require('../../assets/images/Celsius_Symbol_white.png')} style={styles.logo} />
              </TouchableOpacity>
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
                <Item floatingLabel style={styles.floatingWrapper}>
                  <Label style={{color: '#ffffff', fontSize: 12}}>PASSWORD</Label>
                  <Input
                    style={styles.input}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    secureTextEntry returnKeyType='done' autoCorrect={false} />
                </Item>

                {this.renderError()}
                <Button style={styles.button} onPress={this.onButtonPress.bind(this)} block primary>
                  { loading ? (
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
    width: 70,
    height: 70,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20
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
  forgetPassword: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#a3b0be',
    paddingLeft: 17,
    paddingTop: 50
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
  form: {
    marginLeft: 20,
    marginRight: 20
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
    marginRight: 15,
    marginLeft: 15,
    marginTop: 30
  },
  buttonText: {
    color: '#333333'
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
  return {
    email: "branislav@celsius.network",
    password: "test42!",
    // email: state.auth.email,
    // password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {
  loginEmailChanged, loginPasswordChanged, loginLender
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
