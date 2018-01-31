import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import deepmerge from 'deepmerge'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity} from 'react-native'
import {Form, Input, Item, Label, Text, Content, Container} from 'native-base'
import {withdrawETH} from '../../actions/index'

import screenRawStyles from './ManageFundsConfirm.styles'
import globalRawStyles from '../../assets/styles/global.styles'

const rawStyles = deepmerge(globalRawStyles, screenRawStyles)
const styles = StyleSheet.create(rawStyles)

class ManageFundsConfirm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      eth: 6.350,
      toAddress: '0x7328E5cAFC5C533334C98Fd9D860d8B92F263173'
    }

    this.handleChangeToAddress = this.handleChangeToAddress.bind(this)
  }

  handleChangeToAddress (toAddress) {
    this.setState({toAddress})
  }

  render () {
    const { navigation, withdrawAmount, withdrawETH, walletAddress, token, loading } = this.props
    const { toAddress, note } = this.state

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            <Container>
              <Content>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                  <Image source={require('../../assets/images/icon-back.png')} style={styles.back} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.QRCodeWrapper} onPress={() => navigation.navigate('QRScanner')}
                  // onPress={() => navigation.navigate('VerifyPhoneNumber')}
                >
                  <Image source={require('../../assets/images/icon-scan-qrcode.png')} style={styles.QRCode} />
                </TouchableOpacity>

                <Text style={styles.header}>{withdrawAmount} ETH</Text>

                <Form style={styles.form}>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>TO</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.handleChangeToAddress}
                      value={toAddress}
                      autoCorrect={false}
                      // highlightColor="#00ACC1" // cyan600
                      autoFocus autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: '#9CA9B6'}}>NOTE</Label>
                    <Input
                      style={styles.input}
                      value={note}
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                </Form>

                <View style={styles.center}>
                  <TouchableOpacity style={styles.button} onPress={() => withdrawETH('test42!', walletAddress, toAddress, withdrawAmount, token)}>
                    <Text style={styles.buttonText} />
                    <Text style={styles.buttonText}>
                      Confirm withdraw
                      <Image source={require('../../assets/images/icon-arrow.png')} style={styles.buttonIcon} />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.center}>
                  {loading ? (
                    <Text style={styles.message}>Withdrawal should be completed in a few minutes. Check your transaction history for details.</Text>
                  ) : (
                    <Text /> // TODO (djs): remove empty element
                  )}
                </View>
              </Content>
            </Container>
          </View>

        </ImageBackground>
      </View>

    )
  }
}

ManageFundsConfirm.propTypes = {
  navigation: PropTypes.object,
  withdrawAmount: PropTypes.string,
  withdrawETH: PropTypes.func.isRequired,
  walletAddress: PropTypes.string,
  token: PropTypes.string,
  loading: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    loading: state.withdrawETH.loading,
    token: state.auth.token,
    walletAddress: state.lender.walletAddress,
    withdrawAmount: state.withdrawETH.withdrawAmount
  }
}

const mapDispatchToProps = {
  withdrawETH
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageFundsConfirm)
