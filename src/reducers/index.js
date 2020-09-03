import { combineReducers } from 'redux';

import buyProductReducer from './buyProductReducer';
import saldoReducer from './saldoReducer';
// Import all reducer

// Combine all reducer
const rootReducer = combineReducers({
  products: buyProductReducer,
  saldo: saldoReducer,
})

export default rootReducer;
