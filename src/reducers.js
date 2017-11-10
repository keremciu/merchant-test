import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form'
import { reducer as merchantReducer } from "./Merchant";

export default combineReducers({
  merchant: merchantReducer,
  form: formReducer,
});

