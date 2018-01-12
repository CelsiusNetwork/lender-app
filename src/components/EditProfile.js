import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, ImageBackground, Image} from 'react-native'
import {Button, Form, Input, Item, Label, Text, Content, Container} from 'native-base'
import {updateRegisterForm, updateProfile} from '../actions'

class EditProfile extends Component {
  // constructor(props) {
  // super(props)
  // this.state = {
  //   }
  // }

  componentDidMount () {
    const {lender, registerForm, updateRegisterForm} = this.props

    // Prepopulate form fields with lender data
    updateRegisterForm({
      ...registerForm,
      firstName: lender.user_metadata.name,
      lastName: lender.user_metadata.surname,
      email: lender.email
      // TODO(fj)
      // picture: lender.picture,
      // password: '',
      // phoneNumber: ''
    })
  }

  componentWillUnmount () {
    // cleans form & errors
    this.props.updateRegisterForm()
  }

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

  onButtonPress () {
    const {updateProfile, registerForm} = this.props
    updateProfile(registerForm)
  }

  render () {
    const {loading, registerForm} = this.props
    const {firstName, lastName, email, picture, phoneNumber} = registerForm
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/background-blur.png')} style={styles.background}>
          <View style={styles.body}>
            <Text style={styles.header}>PROFILE</Text>
            <Container>
              <Content>
                <View style={styles.avatarSection}>
                  <View style={styles.pts}>
                    <Image source={require('../../assets/images/icon-score.png')} style={styles.score} />
                    <Text style={styles.ptsText}>2559</Text>
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
                    <Label
                      style={{color: 'rgba(156, 169, 182, 0.5)', fontSize: 12}}>{'First Name'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onFirstNameChange.bind(this)}
                      value={firstName}
                      autoCorrect={false}
                      highlightColor='#00ACC1' // cyan600
                      autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label style={{color: 'rgba(156, 169, 182, 0.5)', fontSize: 12}}>{'Last Name'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onLastNameChange.bind(this)}
                      value={lastName}
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label
                      style={{color: 'rgba(156, 169, 182, 0.5)', fontSize: 12}}>{'Your email'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onEmailChange.bind(this)}
                      value={email}
                      keyboard-type='email-address'
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  <Item floatingLabel style={styles.floatingWrapper}>
                    <Label
                      style={{color: 'rgba(156, 169, 182, 0.5)', fontSize: 12}}>{'Phone number'.toUpperCase()}</Label>
                    <Input
                      style={styles.input}
                      onChangeText={this.onPhoneNumberChange.bind(this)}
                      value={phoneNumber}
                      autoCorrect={false}
                      autoCapitalize='none' />
                  </Item>
                  {this.renderError()}
                  <View style={[{marginBottom: 70}, styles.row]}>
                    <View style={styles.cellLeft}>
                      <Button
                        style={styles.button}
                        onPress={this.onButtonPress.bind(this)}
                        // onPress={() => navigate('VerifyPhoneNumber')}
                        block primary>
                        <Text
                          style={styles.buttonText}
                        >Save</Text>
                      </Button>
                    </View>
                    <View style={styles.cellRight}>
                      <Button
                        style={styles.button2}
                        // onPress={this.onButtonPress.bind(this)}
                        onPress={() => this.props.navigation.goBack()}
                        // block primary
                      >
                        <Text
                          style={styles.buttonText2}
                        >Cancel</Text>
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

  renderError () {
    if (this.props.error !== '') {
      return (<Text style={styles.errorText}>{this.props.error}</Text>)
    }
    return <View />
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
    flexDirection: 'row'
    // justifyContent: 'top',
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  body: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  logo: {
    // position: 'absolute',
    width: 140,
    height: 40,
    marginLeft: 35,
    marginBottom: 5
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
    marginTop: 20
  },
  formContainer: {
    marginTop: 100,
    marginBottom: 20
  },
  floatingLabel: {
    color: '#9CA9B6',
    fontSize: 12
  },
  label: {
    // color: '#9CA9B6',
    fontSize: 12
  },
  floatingWrapper: {
    borderBottomWidth: 0
  },
  input: {
    height: 40,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 2,
    color: '#ffffff',
    marginBottom: 10,
    marginRight: 15,
    paddingTop: 10,
    fontSize: 14
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 30,
    // marginLeft: 30,
    marginTop: 30,
    width: '95%'
  },
  button2: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 30,
    // marginLeft: 30,
    marginTop: 30,
    width: '95%'
  },
  buttonText: {
    color: '#333333'
  },
  buttonText2: {
    color: '#ffffff'
  },
  form: {
    marginLeft: 20,
    marginRight: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
    // borderTopColor: 'rgba(255, 255, 255, 0.1)',
    // borderTopWidth: 2
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10,
    height: 40
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10,
    height: 40
  },
  avatarSection: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    position: 'relative'
  },
  avatarWrapper: {
    width: 196,
    height: 196,
    alignItems: 'center'
  },
  avatar: {
    marginTop: 8,
    width: 180,
    height: 180,
    borderRadius: 60
  },
  pts: {
    width: 100,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 15,
    position: 'absolute',
    zIndex: 5,
    bottom: 10,
    right: 50,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  ptsText: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: '#3D4853',
    fontSize: 18,
    marginTop: 5,
    marginRight: 3
  },
  ptsTextExt: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    fontSize: 12,
    color: '#3D4853',
    marginTop: 10
  },
  score: {
    width: 16,
    height: 16,
    marginTop: 7,
    marginRight: 3,
    marginLeft: 7
  },
  errorText: {
    marginLeft: 15,
    marginTop: 10,
    color: '#FF9494'
  }
})

const mapStateToProps = state => {
  return {
    registerForm: state.lender.registerForm,
    lender: state.lender.lender,
    picture: state.lender.lender.picture,
    error: state.lender.error
  }
}

const mapDispatchToProps = {
  updateRegisterForm,
  updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
