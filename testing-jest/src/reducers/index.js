import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import comments from './comments';

export default combineReducers({
  comments: commentsReducer,
});
