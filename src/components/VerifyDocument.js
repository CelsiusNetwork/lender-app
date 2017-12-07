import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { Button, Form, Input, Item, Label, Text, Spinner, Content, Header, Title, Container } from 'native-base'

class VerifyDocument extends Component {
  render () {
    return (<Container>
      <Content>
        VerifyDocument
      </Content>
    </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyDocument)
