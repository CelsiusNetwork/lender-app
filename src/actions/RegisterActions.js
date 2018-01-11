import * as types from './Types'
import { NavigationActions } from 'react-navigation'
import { CelsiusService } from '../services'

export const registerLender = (registerForm, appToken) => {
  console.log('registerLender()x')
  console.log(registerForm, appToken)

  return (dispatch) => {
    const error = validateRegisterForm(registerForm)
    if (!error) {
      dispatch({
        type: types.REGISTER_LENDER_LOADING
      })

      const { firstName, lastName, email, password, phoneNumber } = registerForm
      CelsiusService().registerLender(firstName, lastName, email, password, phoneNumber, appToken)
        .then(response => {
          if (response.ok) {
            console.log('Great Success!')
            console.log(JSON.parse(response._bodyInit))
            registerLenderSuccess(dispatch, JSON.parse(response._bodyInit))
          } else {
            console.log(JSON.parse(JSON.parse(response._bodyInit).error))
            const error = JSON.parse(JSON.parse(response._bodyInit).error).message
            registerLenderFail(dispatch, getErrorText({ server: error }))
          }
        })
        .catch((error) => {
          console.log(error)
          registerLenderFail(dispatch, getErrorText({ server: true }))
        })
    } else {
      registerLenderFail(dispatch, error)
    }
  }
}

const registerLenderSuccess = (dispatch, user) => {
  dispatch({
    type: types.REGISTER_LENDER_SUCCESS,
    payload: user
  })
  // TODO(fj): setup wallet address
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Verification' })
    ]
  }))
}

const registerLenderFail = (dispatch, error) => {
  console.log('registerLenderFail() FCK!')
  console.log(error)
  dispatch({
    type: types.REGISTER_LENDER_FAILURE,
    payload: error
  })
}

export const updateRegisterForm = (field, text) => {
  return {
    type: types.UPDATE_REGISTER_FORM,
    payload: {
      text,
      field
    }
  }
}

function validateRegisterForm (registrationForm) {
  if (!registrationForm.firstName) return getErrorText({ notEmpty: { field: 'First Name' } })
  if (registrationForm.firstName.length < 5) return getErrorText({ atLeast: { field: 'First Name', number: 3 } })
  if (!registrationForm.lastName) return getErrorText({ notEmpty: { field: 'Last Name' } })
  if (registrationForm.lastName.length < 5) return getErrorText({ atLeast: { field: 'First Name', number: 5 } })
  if (!registrationForm.email) return getErrorText({ notEmpty: { field: 'Email' } })
  if (!registrationForm.password) return getErrorText({ notEmpty: { field: 'Password' } })
  if (registrationForm.password.length < 8) return getErrorText({ atLeast: { field: 'First Name', number: 8 } })
  if (!registrationForm.phoneNumber) return getErrorText({ notEmpty: { field: 'Phone number' } })
  return false
}

function getErrorText(error) {
  // error format { atLeast: { field, number }}
  if (error.atLeast) return `Ooops... ${error.atLeast.field} must have at least ${error.atLeast.number} letters!`
  // error format { notEmpty: { field }}
  if (error.notEmpty) return `Ooops... ${error.notEmpty.field} cannot be empty!`
  // error format { server: String | true }
  if (error.server) return error.server === true ? `Ooops... Something went wrong with our servers :(` : error.server
  return 'Ooops... Something went terribly wrong :( We are working nonstop!'
}

