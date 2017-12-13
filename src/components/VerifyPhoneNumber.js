import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Content, Container } from 'native-base'

class VerifyPhoneNumber extends Component {
  render () {
    return (<Container>
      <Content>
        VerifyPhoneNumber
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhoneNumber)
