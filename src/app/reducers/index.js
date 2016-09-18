import {combineReducers} from 'redux';
import world from './world';
import status from './status';

const rootReducer = combineReducers({
  world,
  status
});

export default rootReducer;
