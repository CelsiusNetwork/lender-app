import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import deepmerge from 'deepmerge'
import {ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'
import {Content, Container} from 'native-base'

import screenRawStyles from './HistoryDetail.styles'
import globalRawStyles from '../../assets/styles/global.styles'

const rawStyles = deepmerge(globalRawStyles, screenRawStyles)
const styles = StyleSheet.create(rawStyles)

class HistoryDetail extends Component {
  // Rendering methods
  renderHeadingText () {
    const {activeTransaction, walletAddress} = this.props
    let heading = ''

    if (activeTransaction.isReceiving(walletAddress)) {
      heading = 'RECEIVED'
    } else {
      heading = 'SOLD'
    }

    if (activeTransaction.isDegreeTransaction) {
      heading = `${heading} DEGREE`
    } else {
      heading = `${heading} ETHEREUM`
    }

    return heading
  }

  render () {
    const {activeTransaction, walletAddress, navigation} = this.props

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Image source={require('../../assets/images/icon-back.png')} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.header}>{this.renderHeadingText()}</Text>
            <Container>
              <Content>
                <View style={styles.aCenter}>
                  <View style={styles.ethWrapper}>
                    {activeTransaction.isReceiving(walletAddress) ? (
                      <View style={[styles.circle, styles.green]}>
                        <Image source={require('../../assets/images/icon-received.png')} style={styles.icon} />
                      </View>
                    ) : (
                      <View style={[styles.circle, styles.red]}>
                        <Image source={require('../../assets/images/icon-given.png')} style={styles.icon} />
                      </View>
                    )}
                    {activeTransaction.isDegreeTransaction ? (
                      <Image source={require('../../assets/images/icon-coins.png')} style={styles.eth} />
                    ) : (
                      <Image source={require('../../assets/images/icon-eth.png')} style={styles.eth} />
                    )}
                  </View>
                  {activeTransaction.isDegreeTransaction ? (
                    <View style={styles.row}>
                      <View style={styles.cellLeft}>
                        <Text style={styles.cellLeftText}>Amount of CEL</Text>
                      </View>
                      <View style={styles.cellRight}>
                        <Text
                          style={styles.cellRightText}>{activeTransaction.degAmount} CEL</Text>
                      </View>
                    </View>
                  ) : (
                    <View style={styles.row}>
                      <View style={styles.cellLeft}>
                        <Text style={styles.cellLeftText}>Amount of ETH</Text>
                      </View>
                      <View style={styles.cellRight}>
                        <Text
                          style={styles.cellRightText}>{activeTransaction.ethValue} ETH</Text>
                      </View>
                    </View>
                  )}

                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                      <Text style={styles.cellLeftText}>Points earned</Text>
                    </View>
                    <View style={styles.cellRight}>
                      <Text style={styles.cellRightText}>100</Text>
                      <Image source={require('../../assets/images/icon-points.png')} style={styles.points} />
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                      <Text style={styles.cellLeftText}>Date</Text>
                    </View>
                    <View style={styles.cellRight}>
                      <Text
                        style={styles.cellRightText}>{activeTransaction.dateDisplay}</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                      <Text style={styles.cellLeftText}>Time</Text>
                    </View>
                    <View style={styles.cellRight}>
                      <Text
                        style={styles.cellRightText}>{activeTransaction.timeDisplay}</Text>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.cellLeft}>
                      <Text style={styles.cellLeftText}>Status</Text>
                    </View>
                    <View style={styles.cellRight}>
                      <View style={styles.greenDow} />
                      <Text style={styles.cellRightText}>Complete</Text>
                    </View>
                  </View>

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

HistoryDetail.propTypes = {
  activeTransaction: PropTypes.string,
  walletAddress: PropTypes.string,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  const {activeTransaction} = state.transactions
  const {walletAddress} = state.lender

  return {
    activeTransaction,
    walletAddress
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail)
