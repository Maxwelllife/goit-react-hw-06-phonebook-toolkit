import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
// 5. испортируем REMOVE_CONTACT
import { addContact, removeContact, filterContact } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};
export const phonebookReducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => {
    state.contacts = [...state.contacts, payload];
    // console.log('payload: ', payload);
  },
  [removeContact]: (state, { payload }) => {
    state.contacts = state.contacts.filter(item => item.id !== payload);
  },
  [filterContact]: (state, { payload }) => {
    state.filter = payload.toLowerCase().trim();
  },
});

const contactsReducer = combineReducers({
  phonebook: phonebookReducer,
});

export default contactsReducer;
