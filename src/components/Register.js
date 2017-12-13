import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { Button, Form, Input, Item, Label, Text, Image, Content, Header, Title, Container } from 'native-base'
import { registerFirstNameChanged, registerLastNameChanged, registerEmailChanged, registerPasswordChanged, registerPhoneNumberChanged, registerLender } from '../actions'

class Register extends Component {
  renderError () {
    if (this.props.error !== '') { return (<Text style={styles.errorText}>{this.props.error}</Text>) }
    return <View />
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
    this.props.registerLender({ firstName, lastName, email, password, phoneNumber })
  }

  render () {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input
                onChangeText={this.onFirstNameChange.bind(this)}
                value={this.props.firstName}
                autoCorrect={false}
                autoFocus autoCapitalize='none' />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input
                onChangeText={this.onLastNameChange.bind(this)}
                value={this.props.lastName}
                autoCorrect={false}
                autoCapitalize='none' />
            </Item>
            <Item floatingLabel>
              <Label>your email</Label>
              <Input
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                keyboard-type='email-address'
                autoCorrect={false}
                autoCapitalize='none' />
            </Item>
            <Item floatingLabel last>
              <Label>password</Label>
              <Input
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
                secureTextEntry returnKeyType='done' autoCorrect={false} />
            </Item>
            <Item floatingLabel>
              <Label>Phone number</Label>
              <Input
                onChangeText={this.onPhoneNumberChange.bind(this)}
                value={this.props.phoneNumber}
                autoCorrect={false}
                autoCapitalize='none' />
            </Item>
            {this.renderError()}
            <Button onPress={this.onButtonPress.bind(this)} block primary>
              <Text>Verify your profile</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  logo: {
    position: 'absolute',
    width: 140,
    height: 40,
    left: 30,
    top: 30
  }
})

const mapStateToProps = state => {
  return {
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
  registerFirstNameChanged, registerLastNameChanged, registerEmailChanged, registerPasswordChanged, registerPhoneNumberChanged, registerLender
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
