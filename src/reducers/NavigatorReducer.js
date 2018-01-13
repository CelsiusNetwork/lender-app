import { Navigator } from '../Navigator'

const initialState = Navigator.router.getStateForAction( // update the state of the Navigator to actually navigate to the route
  Navigator.router.getActionForPathAndParams('Welcome') // perform this action to navigate to this path
)

export default (state = initialState, action) => {
  return Navigator.router.getStateForAction(action, state) || state
}