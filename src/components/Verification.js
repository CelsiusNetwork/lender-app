import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Content, Container, Form, Input, Item, Label } from 'native-base'
// import { NavigationActions } from 'react-navigation'
import { Pages } from 'react-native-pages'
import { lenderAppInitToken } from '../actions'

import VerifyPhoneNumber from './VerifyPhoneNumber'
import VerifyDocument from './VerifyDocument'
import VerifyPhoto from './VerifyPhoto'
import Agree from './Agree'
import Swiper from 'react-native-swiper'


class Verification extends Component {
  constructor() {
    super();
    this.state = {
      imgList: [
        'https://gitlab.pro/yuji/demo/uploads/d6133098b53fe1a5f3c5c00cf3c2d670/DVrj5Hz.jpg_1',
        'https://gitlab.pro/yuji/demo/uploads/2d5122a2504e5cbdf01f4fcf85f2594b/Mwb8VWH.jpg',
        'https://gitlab.pro/yuji/demo/uploads/4421f77012d43a0b4e7cfbe1144aac7c/XFVzKhq.jpg',
        'https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg'
      ],
      loadQueue: [0, 0, 0, 0]
    }
    this.loadHandle = this.loadHandle.bind(this)
  }

  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }

  goToPage() {
    var progress = this.state.progress+25
    this.setState({progress: progress})
    this.setState({page: "VerifyPhoto"})
    this.setState({progressLine: progress+"%"})
  }

  renderPager({ pages, progress, indicatorPosition }) {
    if ('none' === indicatorPosition) {
      return null;
    }
    return (
      null
    );
  }

  render () {
    // const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            {/* <Image source={require('../../assets/images/logo-header.png')} style={styles.logo} /> */}
            <Text style={styles.header}>{'Verify phone number'.toUpperCase()}</Text>
            <ImageBackground source={require('../../assets/images/progress-line-bg.png')} style={styles.line}>
              <ImageBackground source={require('../../assets/images/progress-line.png')} style={[styles.lineInner, {width: this.state.progressLine}]}></ImageBackground>
            </ImageBackground>
            {/* <TouchableOpacity style={styles.button}
              onPress={() => this.goToPage()}
              >
                <Text style={styles.buttonText}>Go to second page</Text>
              </TouchableOpacity>
            <Pages
              scrollToPage='VerifyPhoto'
              scrollEnabled={false}
              renderPager={this.renderPager.bind(this)}
              // style={styles.pagesWrapper}
              >
              <VerifyPhoneNumber />
              <VerifyDocument />
              <VerifyPhoto />
              <Agree />
            </Pages> */}
            <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={false}>
            </Swiper>


          </View>

        </ImageBackground>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'top',
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  body: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  aCenter: {
    alignItems: 'center'
  },
  line: {
    height: 10,
    borderRadius: 2,
    height: 4,
    marginBottom: 10
  },
  lineInner: {
    width: '33%',
    borderRadius: 2,
    height: 4
  },
  logo: {
    // flex: 1,
    // position: 'absolute',
    marginTop: 40,
    marginLeft: 30,
    width: 140,
    height: 40,
  },
  header: {
		fontSize: 32,
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'white',
		paddingLeft: 30,
		paddingRight: 30,
		marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
  },
  mobileWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  mobile: {
    marginTop: 20
  },
  inputWrapper: {
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 0,
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 70,
    textAlign: 'center',
  },
  inputDash: {
    height: 2
  },
  text: {
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#9ca9b7',
    paddingLeft: 30,
    paddingRight: 30,
    lineHeight: 20,
    textAlign: 'center'

  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30
  },
  buttonText: {
    color: '#333333'
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
  lenderAppInitToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Verification)