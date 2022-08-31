import { createStore } from 'redux';
import contactsReducer from './reducer';

const store = createStore(
  contactsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
