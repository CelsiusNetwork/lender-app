import * as types from './Types';
import { NavigationActions } from "react-navigation";

export const emailChanged = (text) => {
  return {
    type: types.EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_USER_LOADING
    });

    }
};


const loginUserFail = (dispatch, errorCode) => {
  dispatch({
    type: types.LOGIN_USER_FAIL,
    payload: errorCode
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  });
};