import { CURRENT_PLATE } from '../actions/types';

export default ( state={}, action ) => {
  switch (action.type) {
    case CURRENT_PLATE:
      return { ...state, current: action.plate };
    default:
      return state;
  }
}
