import * as types from './Types';
import { NavigationActions } from "react-navigation";

export const firstNameChanged = (text) => {
  return {
    type: types.FNAME_CHANGED,
    payload: text
  }
}

export const lastNameChanged = (text) => {
  return {
    type: types.LNAME_CHANGED,
    payload: text
  }
}

export const emailChanged = (text) => {
  return {
    type: types.EMAIL_CHANGED_L,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: types.PASSWORD_CHANGED_L,
    payload: text
  }
}

export const register = ({ firstName }) => {
  return (dispatch) => {
    dispatch({
      type: types.REGISTER_LENDER
    });

  }
};

const registerFail = (dispatch, errorCode) => {
  dispatch({
    type: types.REGISTER_LENDER_FAILURE,
    payload: errorCode
  });
};

const registerSuccess = (dispatch, user) => {
  dispatch({
    type: types.REGISTER_LENDER_SUCCESS,
    payload: user
  });
};