import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Pages } from 'react-native-pages'
import Welcome from './Welcome'
import HowItWorks from './HowItWorks'

class WelcomePager extends Component {
   static navigationOptions = ({ navigation }) => ({
     title: 'Welcome'
   });
  
   

  render () {
    return (
      <View style={styles.container}>
         <ImageBackground source={require('../../../assets/images/background.png')} style={styles.background}>
           <Pages>
             <Welcome />
             <HowItWorks navigation={this.props.navigation}/>
           </Pages>
         </ImageBackground>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 38,
    paddingBottom: 12,
    color: '#fff'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    nav: state.nav
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePager)
