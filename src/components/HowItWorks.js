import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Button, Form, Input, Item, Label, Text, Spinner, Content, Header, Title, Container } from 'native-base'

class HowItWorks extends Component {
  navigate () {
    const navigate2Register = NavigationActions.navigate({
      routeName: 'Register',
      params: {
        name: 'Register'
      }
    })
    this.props.navigation.dispatch(navigate2Register)
  }

  render () {
    return (<Container style={styles.container}>
      <Content>
        <Text style={styles.title}>HOW IT WORKS?</Text>
        <Button onPress={this.navigate.bind(this)} block primary>
          <Text>Create Account</Text>
        </Button>
      </Content>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 38,
    paddingBottom: 12,
    color: '#fff'
  },
  container: {
    backgroundColor: '#1F4D7F'
  }
})

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks)
