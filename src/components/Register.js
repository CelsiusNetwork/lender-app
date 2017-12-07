import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Button, Form, Input, Item, Label, Text, Spinner, Content, Header, Title, Container } from "native-base";

class Register extends Component {

  renderError(){
    if (this.props.error !== '')
      return (<Text style={styles.errorText}>{this.props.error}</Text>);
    return <View />;
  }

  renderButton() {
    if (this.props.loading){
      return <Spinner color='black' />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)} block primary>
        <Text>Verify your profile</Text>
      </Button>
    );
  }

  onButtonPress() {
    const { firstName, lastName, email, password } = this.props;
    this.props.register({ firstName, lastName, email, password });
  }

  onFirstNameChange() {
    this.props.firstNameChanged(text);
  }
  onLastNameChange() {
    this.props.lastNameChanged(text);
  }
  onEmailChange() {
    this.props.emailChanged(text);
  }
  onPasswordChange() {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Container>

      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Register);