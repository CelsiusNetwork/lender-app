import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Content, Container } from 'native-base'

class VerifyPhoto extends Component {
  render () {
    return (<Container>
      <Content>
        VerifyPhoto
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhoto)
