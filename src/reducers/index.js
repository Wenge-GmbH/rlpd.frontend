import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import plateReducer from './plate-reducer';
import authReducer from './auth-reducer';
import logReducer from './log-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  plate: plateReducer,
  auth: authReducer,
  log: logReducer
})

export default rootReducer;
