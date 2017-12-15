import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, Content, Container } from 'native-base'

class Home extends Component {
  render () {
    return (<Container>
      <Content>
        <Text>Home goes here</Text>
      </Content>
    </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

// The mapDispatchToProps function lets us inject 
// certain props into the React component that can dispatch actions
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// For example, the HowItWorks component calls onPress 
// 