import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import deepmerge from 'deepmerge'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity} from 'react-native'
import {Text, Content, Container} from 'native-base'

import screenRawStyles from './ManageFunds.styles'
import globalRawStyles from '../../assets/styles/global.styles'

const rawStyles = deepmerge(globalRawStyles, screenRawStyles)
const styles = StyleSheet.create(rawStyles)

class ManageFunds extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ethChange: ' ▲ +5.84%',
      degFiat: '≈ $0.02',
      degChange: ' ▲ +0.01%'
    }
  }

  render () {
    const { ethChange, degFiat, degChange } = this.state
    const { navigation, ethBalance, celBalance } = this.props

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Image source={require('../../assets/images/icon-back.png')} style={styles.back} />
            </TouchableOpacity>

            <Container>
              <Content>
                <Text style={styles.header}>MANAGE {'\n'} FUNDS</Text>

                <Text style={styles.text}>
                  You can safely withdraw your funds in
                  <Text style={{color: '#ffffff'}}> 7 days </Text>
                  from now. If you do it earlier, you may lose seniority score and additional fees may apply.
                </Text>

                <View style={styles.center}>
                  <View style={styles.boxWrapper}>
                    <View style={styles.box}>
                      <Image source={require('../../assets/images/icon-eth.png')} style={styles.icon} />
                      <Text style={styles.boxText1}>
                        <Text style={styles.boxText1Inner}>{parseInt(ethBalance).toFixed(3)}</Text>
                        <Text style={styles.boxText1Inner}> ETH</Text>
                      </Text>
                      <Text style={styles.boxText2}>
                        <Text style={styles.boxText2Inner}>= ${(ethBalance * 1250).toFixed(2)}</Text>
                        <Text style={styles.changeUp}>{ethChange}</Text>
                      </Text>
                      <Image source={require('../../assets/images/graph1.png')} style={styles.graph} />
                      <TouchableOpacity style={styles.boxButton} onPress={() => navigation.navigate('ManageFundsWithdraw')}>
                        <Text style={styles.boxButtonText}>
                          <Image source={require('../../assets/images/icon-transfer-arrows.png')} style={styles.buttonIcon} />
                          <Text style={{color: '#ffffff', fontFamily: 'barlow'}}>{'   '}Withdraw ETH</Text></Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={styles.center}>
                  <View style={styles.boxWrapper}>
                    <View style={styles.box}>
                      <Image source={require('../../assets/images/icon-transfer.png')} style={styles.icon} />
                      <Text style={styles.boxText1}>
                        <Text style={styles.boxText1Inner}>{parseInt(celBalance).toFixed(3)}</Text>
                        <Text style={styles.boxText1Inner}> CEL</Text>
                      </Text>
                      <Text style={styles.boxText2}>
                        <Text style={styles.boxText2Inner}>{degFiat}</Text>
                        <Text style={styles.changeUp}> {degChange}</Text>
                      </Text>
                      <Image source={require('../../assets/images/graph1.png')} style={styles.graph} />
                      <TouchableOpacity style={styles.boxButton}>
                        <Text style={styles.boxButtonTextDisabled}>Withdraw coming soon…</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={styles.center}>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Close</Text>
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

ManageFunds.propTypes = {
  ethBalance: PropTypes.string,
  celBalance: PropTypes.string,
  navigation: PropTypes.object
}

const mapStateToProps = state => {
  return {
    ethBalance: state.wallet.ethBalance,
    celBalance: state.wallet.celBalance
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ManageFunds)
