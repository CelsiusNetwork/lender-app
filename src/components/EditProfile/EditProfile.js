import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import deepmerge from 'deepmerge'
import {StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text} from 'react-native'
import {Button, Form, Input, Item, Label, Content, Container} from 'native-base'
import {updateRegisterForm, updateProfile, getLenderRewardPoints, logoutLender} from '../../actions'

import screenRawStyles from './EditProfile.styles'
import globalRawStyles from '../../assets/styles/global.styles'

const rawStyles = deepmerge(globalRawStyles, screenRawStyles)
const styles = StyleSheet.create(rawStyles)

class EditProfile extends Component {
  constructor (props) {
    super(props)

    this.onFirstNameChange = this.onFirstNameChange.bind(this)
    this.onLastNameChange = this.onLastNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
    this.onLogoutPress = this.onLogoutPress.bind(this)
    this.onButtonPress = this.onButtonPress.bind(this)
    this.onGoBack = this.onGoBack.bind(this)
  }

  // Component Lifecycle Methods
  componentDidMount () {
    const { lender, registerForm, updateRegisterForm, walletAddress, getLenderRewardPoints, token } = this.props

    // Pre-populate form fields with lender data
    updateRegisterForm({
      ...registerForm,
      firstName: lender.user_metadata.name,
      lastName: lender.user_metadata.surname,
      email: lender.email,
      picture: lender.picture
      // password: '',
      // phoneNumber: ''
    })

    getLenderRewardPoints(walletAddress, token)
  }

  componentWillUnmount () {
    const { updateRegisterForm } = this.props
    updateRegisterForm()
  }

  // Event Handlers
  onFirstNameChange (text) {
    this.updateField('firstName', text)
  }

  onLastNameChange (text) {
    this.updateField('lastName', text)
  }

  onEmailChange (text) {
    this.updateField('email', text)
  }

  onPhoneNumberChange (text) {
    this.updateField('phoneNumber', text)
  }

  updateField (field, text) {
    const {registerForm, updateRegisterForm} = this.props
    registerForm[field] = text
    updateRegisterForm(registerForm)
  }

  onLogoutPress () {
    this.props.logoutLender()
  }

  onButtonPress () {
    const {updateProfile, registerForm} = this.props
    updateProfile(registerForm)
  }

  onGoBack () {
    this.props.navigation.goBack()
  }

  // Rendering methods
  renderError () {
    const { error } = this.props
    if (error) {
      return (<Text style={styles.errorText}>{error}</Text>)
    }
    return <View />
  }

  render () {
    const {registerForm, lenderRewardPoint, phoneNumber} = this.props
    const {firstName, lastName, email, picture} = registerForm

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            <View style={[{marginTop: 10, marginBottom: 10}]}>
              <TouchableOpacity onPress={this.onGoBack} style={[styles.backButton]}>
                <Image source={require('../../assets/images/icon-back.png')} style={styles.back} />
              </TouchableOpacity>

              <Text style={[styles.header]}>PROFILE</Text>

              <TouchableOpacity style={styles.logoutWrapper} onPress={this.onLogoutPress}>
                <View style={styles.cellRight}>
                  <Image source={require('../../assets/images/log-out.png')} style={styles.logoutBtn} />
                </View>
              </TouchableOpacity>
            </View>

            <Container>
              <Content>
                <View style={styles.avatarSection}>
                  <View style={styles.pts}>
                    <Image source={require('../../assets/images/icon-score.png')} style={styles.score} />
                    <Text style={styles.ptsText}>{lenderRewardPoint}</Text>
                    <Text style={styles.ptsTextExt}>pts</Text>
                  </View>
                  <ImageBackground source={require('../../assets/images/avatar-wrapper.png')} style={styles.avatarWrapper}>
                    <Image
                      source={{uri: picture}}
                      style={styles.avatar}
                      resizeMode='cover'
                      borderRadius={90} />
                  </ImageBackground>
                </View>

                <Form style={styles.form}>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={rawStyles.floatingLabel}>FIRST NAME</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onFirstNameChange}
                      value={firstName}
                      autoCorrect={false}
                      highlightColor='#00ACC1' // cyan600
                      autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={rawStyles.floatingLabel}>LAST NAME</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onLastNameChange}
                      value={lastName}
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={rawStyles.floatingLabel}>YOUR EMAIL</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onEmailChange}
                      value={email}
                      keyboard-type='email-address'
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={rawStyles.floatingLabel}>PHONE NUMBER</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onPhoneNumberChange}
                      value={phoneNumber}
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>

                  {this.renderError()}

                  <View style={[{marginBottom: 70}, styles.row]}>
                    <View style={styles.cellLeft}>
                      <Button style={styles.button} onPress={this.onButtonPress} block primary>
                        <Text style={styles.buttonText}>Save</Text>
                      </Button>
                    </View>
                    <View style={styles.cellRight}>
                      <Button style={styles.button2} onPress={this.onGoBack}>
                        <Text style={styles.buttonText2}>Cancel</Text>
                      </Button>
                    </View>
                  </View>
                </Form>

              </Content>
            </Container>
          </View>
        </ImageBackground>
      </View>

    )
  }
}

EditProfile.propTypes = {
  token: PropTypes.string.isRequired,
  registerForm: PropTypes.object.isRequired,
  walletAddress: PropTypes.string.isRequired,
  lenderRewardPoint: PropTypes.any.isRequired,
  lender: PropTypes.object.isRequired,
  picture: PropTypes.any.isRequired,
  error: PropTypes.string,
  updateRegisterForm: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  getLenderRewardPoints: PropTypes.func.isRequired,
  logoutLender: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    registerForm: state.lender.registerForm,
    walletAddress: state.lender.walletAddress,
    phoneNumber: state.lender.phoneNumber,
    lenderRewardPoint: state.lender.lenderRewardPoint,
    lender: state.lender.lender,
    picture: state.lender.lender.picture,
    error: state.lender.error
  }
}

const mapDispatchToProps = {
  updateRegisterForm,
  updateProfile,
  getLenderRewardPoints,
  logoutLender
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
