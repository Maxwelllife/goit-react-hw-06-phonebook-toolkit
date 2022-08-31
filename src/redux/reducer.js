import { combineReducers } from 'redux';

// 5. испортируем REMOVE_CONTACT
import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACT } from './types';

const initialState = {
  contacts: [],
  filter: '',
};

// reducer принимает из App текщее значение store и action
const phonebookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== payload),
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filter: payload.toLowerCase().trim(),
      };

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  phonebook: phonebookReducer,
});

export default contactsReducer;
