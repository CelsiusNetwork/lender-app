import * as types from '../actions/Types'

const REGISTER_INITIAL_STATE = {
  registerForm: {
    firstName: 'filip',
    lastName: 'filipfilip',
    email: `filip.jovakaric+${ new Date().getTime() }@mvpworkshop.co`,
    password: 'filip123',
    phoneNumber: '1234567890'
  },
  user: null,
  loading: false,
  error: null
}

export default (state = REGISTER_INITIAL_STATE, action) => {

  console.log(action)

  switch (action.type) {
    case types.UPDATE_REGISTER_FORM:
      const updatedField = {}

      updatedField[action.payload.field] = action.payload.text
      console.log(updatedField)

      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          ...updatedField
        }
      }

    // case types.REGISTER_FNAME_CHANGED:
    //   return { ...state, firstName: action.payload }
    // case types.REGISTER_LNAME_CHANGED:
    //   return { ...state, lastName: action.payload }
    // case types.REGISTER_EMAIL_CHANGED:
    //   return { ...state, email: action.payload }
    // case types.REGISTER_PASSWORD_CHANGED:
    //   return { ...state, password: action.payload }
    case types.REGISTER_LENDER_LOADING:
      return { ...state, loading: true }

    case types.REGISTER_LENDER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        registerForm: { ...REGISTER_INITIAL_STATE.registerForm },
        error: null,
        loading: false
      }

    case types.REGISTER_LENDER_FAILURE:
      // let errorMsg
      // errorMsg = 'register lender fail'
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}
