import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import plateReducer from './plate-reducer';
import authReducer from './auth-reducer';
import logReducer from './log-reducer';
import settingsReducer from './settings-reducer';
import streamReducer from './stream-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  plate: plateReducer,
  auth: authReducer,
  log: logReducer,
  settings: settingsReducer,
  stream: streamReducer
})

export default rootReducer;
