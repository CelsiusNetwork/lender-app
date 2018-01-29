import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import deepmerge from 'deepmerge'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text, Share, Clipboard} from 'react-native'
import {Content, Container} from 'native-base'
import QRCode from 'react-native-qrcode'

import screenRawStyles from './AddFunds.styles'
import globalRawStyles from '../../assets/styles/global.styles'

const rawStyles = deepmerge(globalRawStyles, screenRawStyles)
const styles = StyleSheet.create(rawStyles)

class AddFunds extends Component {
  constructor (props) {
    super(props)

    this.onShareButtonPress = this.onShareButtonPress.bind(this)
    this.onCopyButtonPress = this.onCopyButtonPress.bind(this)
    this.onGoBack = this.onGoBack.bind(this)
  }

  // Component Lifecycle Methods

  // Event Handlers
  onShareButtonPress () {
    Share.share({
      message: 'Wallet Address',
      url: 'http://www.celsius.network',
      title: 'Wallet Address'
    }, {
      // Android only:
      dialogTitle: 'Share Wallet Address',
      // iOS only:
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    }).catch(error => {
      console.error(error)
    })
  }

  onCopyButtonPress () {
    Clipboard.setString(this.props.walletAddress)
  }

  onGoBack () {
    this.props.navigation.goBack()
  }

  // Rendering methods
  render () {
    const { walletAddress } = this.props

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            <Container>
              <Content>
                <TouchableOpacity onPress={this.onGoBack} style={styles.backButton}>
                  <Image source={require('../../assets/images/icon-back.png')} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.header}>ADD FUNDS</Text>
                <Text style={styles.text}>
                  Transfer your funds from another Ethereum wallet to
                  your Celsius account by sending ETH to your unique Celsius address.
                </Text>

                <View style={styles.center}>
                  <View style={styles.qrWrapper}>
                    <QRCode
                      value={walletAddress}
                      size={160}
                      bgColor='black'
                      fgColor='white' />
                  </View>
                </View>

                <Text style={[{marginBottom: 0}, styles.text]}>Your Celsius ETH address:</Text>
                <View style={styles.codeWrapper}>
                  <Text style={styles.codeText}>{walletAddress}</Text>
                  <View style={styles.row}>
                    <TouchableOpacity style={[styles.cellLeft, styles.buttonLeft]} onPress={this.onShareButtonPress}>
                      <Image source={require('../../assets/images/icon-send.png')} style={styles.iconLeft} />
                      <Text style={styles.buttonLeftText}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cellRight, styles.buttonRight]} onPress={this.onCopyButtonPress}>
                      <Image source={require('../../assets/images/icon-copy.png')} style={styles.iconRight} />
                      <Text style={styles.buttonRightText}>Copy</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.center}>
                  <TouchableOpacity onPress={this.onGoBack} style={styles.button}>
                    <Text style={styles.buttonText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </Content>
            </Container>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

AddFunds.propTypes = {
  walletAddress: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    walletAddress: state.lender.walletAddress
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddFunds)
