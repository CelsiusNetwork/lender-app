import * as types from '../actions/Types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload};
    case types.PASSWORD_CHANGED:
      return { ...state, password: action.payload};
    case types.LOGIN_USER_LOADING:
      return { ...state, loading: true};
    case types.LOGIN_USER_SUCCESS:
      return { ...state,
        user: action.payload,
        email: '',
        password: '',
        error: '',
        loading: false
      };
    case types.LOGIN_USER_FAIL:
      let errorMsg;
      switch (action.payload){
        case 'auth/invalid-email':
          errorMsg = 'It must be a correct email address.';
          break;
        case 'auth/invalid-password':
        case 'auth/weak-password':
          errorMsg = 'Must be a password with at least six characters.';
          break;
        case 'auth/email-already-exists':
        case 'auth/email-already-in-use':
          errorMsg = 'Incorrect password.';
          break;
        default:
          errorMsg = 'Authentication failed.';
      }
      return { ...state, error: errorMsg, loading: false};
    default:
      return state;
  }
};