import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { TouchableOpacity, Button, Form, Input, Item, Label, Text, Spinner, Content, Header, Title, Container } from 'native-base'

class Welcome extends Component {
  navigate () {
    const navigate2HowItWorks = NavigationActions.navigate({
      routeName: 'HowItWorks',
      params: {
        name: 'HowItWorks'
      }
    })
    this.props.navigation.dispatch(navigate2HowItWorks)
  }

  render () {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.title}>WELCOME TO CELSIUS</Text>
          <Text style={styles.paragraph}>A new global financial platform that seamlessly connects holders of crypto-assets with borrowers. Earn fees on your assets with borrowers. Earn fees on your assets by allowing financial traders to borrow them.</Text>
          <Button onPress={this.navigate.bind(this)} block primary>
            <Text>Discover</Text>
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
  paragraph: {
    fontSize: 18,
    color: '#fefefe'
  },
  container: {
    backgroundColor: '#1F4D7F'
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
