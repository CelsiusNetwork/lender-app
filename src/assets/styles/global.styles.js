const appStyles = {
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
  },
  body: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  center: {
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 40
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40
  }
}

const textStyles = {
  header: {
    fontSize: 32,
    backgroundColor: 'transparent',
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#9CA9B6',
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 15,
    fontFamily: 'barlow'
  },
  codeWrapper: {
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginRight: 60,
    marginLeft: 60,
    marginTop: 0,
    marginBottom: 20
  },
  codeText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    fontFamily: 'inconsolata'
  },
  errorText: {
    marginLeft: 15,
    marginTop: 10,
    color: '#FF9494'
  }
}

const iconStyles = {
  iconLeft: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 5
  },
  iconRight: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 5
  },
  loader: {
    width: 30,
    height: 30
  }
}

const buttonStyles = {
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 30,
    width: '95%'
  },
  buttonText: {
    color: '#333333'
  },
  buttonText2: {
    color: '#ffffff'
  },
  buttonLeft: {
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRightColor: '#3D4B54',
    borderRightWidth: 1,
    padding: 10,
    borderBottomLeftRadius: 8,
    justifyContent: 'center'
  },
  buttonLeftText: {
    color: '#9CA9B6',
    textAlign: 'left',
    paddingLeft: 5,
    fontFamily: 'barlow',
    fontSize: 18
  },
  buttonRight: {
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    borderBottomRightRadius: 8,
    justifyContent: 'center'
  },
  buttonRightText: {
    color: '#9CA9B6',
    textAlign: 'left',
    paddingLeft: 5,
    fontFamily: 'barlow',
    fontSize: 18
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    left: 20,
    top: 40,
    width: 30
  },
  back: {
    width: 28,
    height: 24,
    resizeMode: 'contain'
  }
}
const formStyles = {
  form: {
    marginLeft: 20,
    marginRight: 20
  },
  floatingWrapper: {
    borderBottomWidth: 0
  },
  floatingLabel: {
    color: '#9CA9B6',
    fontSize: 12
  },
  input: {
    height: 40,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 2,
    color: '#ffffff',
    marginBottom: 10,
    marginRight: 15,
    fontSize: 21
  }
}

export default {
  ...appStyles,
  ...textStyles,
  ...iconStyles,
  ...buttonStyles,
  ...formStyles
}
