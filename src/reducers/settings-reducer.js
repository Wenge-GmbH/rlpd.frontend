import { GET_SETTINGS } from '../actions/types';

export default ( state={}, action ) => {
  switch (action.type) {
    case GET_SETTINGS:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}
