import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Content, Container } from 'native-base'
import { connect } from 'react-redux'
import { Pages } from 'react-native-pages'

import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

class HowItWorks extends Component {
  constructor () {
    super()
    this.state = {
      toLeft: 0,
      toRight: 1
    }
  }

  // Event Handlers
  onButtonPress () {
    this.props.lenderAppInitToken()
  }

  scrollLeft () {
    this.refs.scroller.scrollToPage(this.state.toLeft)
  }

  scrollRight () {
    this.refs.scroller.scrollToPage(this.state.toRight)
  }

  scrolled (wasOnPage) {
    if (wasOnPage === 0) {
      this.setState({toLeft: 0, toRight: 1})
    }
    if (wasOnPage === 1) {
      this.setState({toLeft: 0, toRight: 2})
    }
    if (wasOnPage === 2) {
      this.setState({toLeft: 1, toRight: 2})
    }
  }

  // Rendering methods
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Container>
          <Content>

            <Image source={require('../../assets/images/logo-header.png')} style={styles.logo} />
            <Text style={[{fontFamily: 'barlow-bold'}, styles.header]}>HOW IT WORKS?</Text>

            <View style={styles.circleWrapper}>
              <TouchableOpacity style={styles.aLeftWrapper} onPress={this.scrollLeft.bind(this)}>
                <Image
                  source={require('../../assets/images/arrow-left.png')}
                  resizeMode='contain'
                  style={[styles.aLeft]} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.aRightWrapper} onPress={this.scrollRight.bind(this)}>
                <Image
                  source={require('../../assets/images/arrow-right.png')}
                  resizeMode='contain'
                  style={styles.aRight} />
              </TouchableOpacity>
              <Pages
                onScrollEnd={this.scrolled.bind(this)}
                indicatorPosition='none'
                ref='scroller'
                style={styles.slideshowWrapper}>
                <Slide1 />
                <Slide2 />
                <Slide3 />
              </Pages>
            </View>

            <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this)}>
              <Text style={[{fontFamily: 'barlow'}, styles.buttonText]}>Create account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginTouchable} onPress={() => navigate('LoginForm')}>
              <Text style={[{fontFamily: 'barlow'}, styles.loginText]}>Already have one?</Text>
            </TouchableOpacity>

          </Content>
        </Container>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1
  },
  header: {
    fontSize: 38,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 160
  },
  text: {
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9CA9B6',
    padding: 30,
    lineHeight: 20,
    textAlign: 'center'

  },
  logo: {
    position: 'absolute',
    width: 128,
    height: 40,
    left: 30,
    top: 60,
    resizeMode: 'contain'
  },
  circleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 350,
    marginTop: 30,
    marginBottom: 20,
    position: 'relative'
  },
  aLeftWrapper: {
    position: 'absolute',
    left: 40,
    top: 80,
    zIndex: 10
  },
  aRightWrapper: {
    position: 'absolute',
    right: 40,
    top: 80,
    zIndex: 20
  },
  aLeft: {
    width: 20,
    height: 37
  },
  aRight: {
    width: 20,
    height: 37
  },
  circle: {
    width: 186,
    height: 186
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 43,
    marginLeft: 43
  },
  buttonText: {
    color: '#3D4853',
    fontSize: 21
  },
  loginTouchable: {
    marginTop: 25,
    marginRight: 30,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  loginText: {
    backgroundColor: 'transparent',
    color: 'rgba(156, 169, 182, 0.3)',
    fontSize: 18
  },
  slideshowWrapper: {
    height: 350
  }
})

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks)
