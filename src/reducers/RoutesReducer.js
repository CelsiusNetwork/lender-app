import { Routes } from "../Routes"

const initialState = Routes.router.getStateForAction(Routes.router.getActionForPathAndParams('LoginForm'));

export default (state = initialState, action) => {
  return Routes.router.getStateForAction(action, state) || state;
};