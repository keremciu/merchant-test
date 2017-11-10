import { combineReducers } from 'redux';
import { reducer as list } from './List'
import { reducer as edit } from './Edit'
import { reducer as add } from './Add'

export default combineReducers({
  list,
  edit,
  add,
});
