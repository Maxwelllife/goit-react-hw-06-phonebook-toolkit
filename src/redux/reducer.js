import { combineReducers } from 'redux';

// 5. испортируем REMOVE_CONTACT
import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACT } from './types';

const initialState = [];

// reducer принимает из App текщее значение store и action
const itemsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTACT:
      console.log('store: ', state);
      //  store обновился -> дальше в App
      return [...state, payload];
    //6. Описываем случай когда type = REMOVE_CONTACT
    case REMOVE_CONTACT:
      console.log('store: ', state);
      //  store обновился -> дальше в App
      // 7. вернули новый массив без того выбраного id
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterInitialStore = '';
const filterReducer = (store = filterInitialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_CONTACT:
      return payload.toLowerCase().trim();
    default:
      return store;
  }
};
const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
