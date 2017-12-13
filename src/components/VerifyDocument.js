import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Content, Container } from 'native-base'

class VerifyDocument extends Component {
  render () {
    return (<Container>
      <Content>
        Verify Document goes here
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
