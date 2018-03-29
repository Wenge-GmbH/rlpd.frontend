import { STREAM_IMAGE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case STREAM_IMAGE:
      return {...state, imageData: action.data};

    default:
      return state;
  }
}
