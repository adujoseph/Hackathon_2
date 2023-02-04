import {combineReducers} from 'redux';
import categoryReducer from './Category/CategoryReducer';


export const rootReducer = combineReducers({
  category: categoryReducer,
});