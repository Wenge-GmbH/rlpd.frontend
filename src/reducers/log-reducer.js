import { SUCCESS_LOG, ERROR_LOG } from '../actions/types';

export default ( state={}, action ) => {
  switch (action.type) {
    case SUCCESS_LOG:
      return { ...state, success: action.payload }
    default:
      return state;
  }
}
