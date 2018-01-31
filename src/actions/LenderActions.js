import * as types from './Types'
import {NavigationActions} from 'react-navigation'
import {CelsiusService} from '../services'
import {ErrorModel} from '../models/ErrorModel'

export const registerLender = (registerForm, appToken) => {
  return (dispatch) => {
    const error = validateRegisterForm(registerForm)
    if (!error) {
      dispatch({type: types.REGISTER_LENDER_LOADING})

      let service = new CelsiusService(appToken)

      service.registerLender(registerForm)
        .then(response => {
          if (response instanceof ErrorModel) {
            registerLenderFail(dispatch, getErrorText({server: error}))
          } else {
            registerLenderSuccess(dispatch, response)
          }
        })
    } else {
      registerLenderFail(dispatch, error)
    }
  }
}

const registerLenderSuccess = (dispatch, response) => {
  dispatch({
    type: types.REGISTER_LENDER_SUCCESS
  })
  dispatch({
    type: types.FETCH_LENDER_SUCCESS,
    payload: response.user
  })
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({routeName: 'Verification'})
    ]
  }))
}

const registerLenderFail = (dispatch, error) => {
  dispatch({
    type: types.REGISTER_LENDER_FAILURE,
    payload: error
  })
}

export const updateProfile = (registerForm) => {
  return (dispatch) => {
    const error = validateEditProfileForm(registerForm)
    if (error) {
      dispatch({
        type: types.REGISTER_LENDER_FAILURE,
        payload: error
      })
    }
  }
}

export const updateRegisterForm = (registerForm) => {
  return {
    type: types.UPDATE_REGISTER_FORM,
    payload: registerForm
  }
}

/**
 * @name getLenderRewardPoints
 * @description Call api-end point and get lender reward points
 * @param walletAddress {string}
 * @param token {string}
 *
 * @return function
 * */
export const getLenderRewardPoints = (walletAddress, token) => {
  return (dispatch) => {
    let service = new CelsiusService(token)

    service.getLenderRewardPoints(walletAddress)
      .then(response => {
        handleLenderRewardPoints(dispatch, response)
      })
  }
}

/**
 * @name handleLenderRewardPoints
 * @description handle server response and dispatch to set lender reward points into state
 * @param dispatch {function}
 * @param response {object}
 *
 * @return function
 * */
const handleLenderRewardPoints = (dispatch, response = {}) => {
  let action

  if (response instanceof ErrorModel) {
    action = {type: types.FETCH_LENDER_REWARD_POINTS_FAIL, payload: 0}
  } else {
    action = {type: types.FETCH_LENDER_REWARD_POINTS_SUCCESS, payload: response.points}
  }

  dispatch(action)
}

function validateRegisterForm (registrationForm) {
  if (!registrationForm.firstName) return getErrorText({notEmpty: {field: 'First Name'}})
  if (registrationForm.firstName.length < 2) return getErrorText({atLeast: {field: 'First Name', number: 2}})
  if (!registrationForm.lastName) return getErrorText({notEmpty: {field: 'Last Name'}})
  if (registrationForm.lastName.length < 2) return getErrorText({atLeast: {field: 'Last Name', number: 2}})
  if (!registrationForm.email) return getErrorText({notEmpty: {field: 'Email'}})
  if (!registrationForm.password) return getErrorText({notEmpty: {field: 'Password'}})
  if (registrationForm.password.length < 3) return getErrorText({atLeast: {field: 'Password', number: 3}})
  if (!registrationForm.phoneNumber) return getErrorText({notEmpty: {field: 'Phone number'}})
  return false
}

function validateEditProfileForm (registrationForm) {
  if (!registrationForm.firstName) return getErrorText({notEmpty: {field: 'First Name'}})
  if (registrationForm.firstName.length < 5) return getErrorText({atLeast: {field: 'First Name', number: 2}})
  if (!registrationForm.lastName) return getErrorText({notEmpty: {field: 'Last Name'}})
  if (registrationForm.lastName.length < 5) return getErrorText({atLeast: {field: 'First Name', number: 3}})
  if (!registrationForm.email) return getErrorText({notEmpty: {field: 'Email'}})
  if (!registrationForm.phoneNumber) return getErrorText({notEmpty: {field: 'Phone number'}})
  return false
}

function getErrorText (error) {
  // error format { atLeast: { field, number }}
  if (error.atLeast) return `Oops... ${error.atLeast.field} must have at least ${error.atLeast.number} letters!`
  // error format { notEmpty: { field }}
  if (error.notEmpty) return `Oops... ${error.notEmpty.field} cannot be empty!`
  // error format { server: String | true }
  if (error.server) return error.server === true ? `Oops... Something went wrong with our servers ` : error.server
  return 'Oops... Something went terribly wrong :( We are working nonstop to fix it!'
}
