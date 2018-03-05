import { SUCCESS_LOG, ERROR_LOG, ERROR_IMAGE } from '../actions/types';

export default ( state={}, action ) => {
  switch (action.type) {
    case SUCCESS_LOG:
      return { ...state, success: action.payload };
    case ERROR_LOG:
      return { ...state, error: action.payload };
    case ERROR_IMAGE:
     return { ...state, errorImages: { ...state.errorImages, [action.id]: action.url } };
    default:
      return state;
  }
}
