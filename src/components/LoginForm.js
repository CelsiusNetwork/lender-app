import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { Button, Form, Input, Item, Label, Text, Spinner, Content, Container } from 'native-base'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
  onButtonPress () {
    // this.props.loginUser({ email, password })
    console.log(this.props.navigation)
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner color='black' />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)} block primary>
        <Text>Login</Text>
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
    return (<Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>your email</Label>
            <Input
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              keyboard-type='email-address'
              autoCorrect={false}
              autoFocus autoCapitalize='none' />
          </Item>
          <Item floatingLabel last>
            <Label>password</Label>
            <Input
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              secureTextEntry returnKeyType='done' autoCorrect={false} />
          </Item>
          {this.renderError()}
          {this.renderButton()}
        </Form>
      </Content>
    </Container>

    )
  }
}

const styles = StyleSheet.create({
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
  emailChanged, passwordChanged, loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
