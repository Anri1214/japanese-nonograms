import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import rootReducer from './rootReducer';

/**
 * @function create root reducer.
 * @param {Object} history - Browser history.
 */
const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  rootReducer
});

export default createRootReducer;
