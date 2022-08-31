import { nanoid } from 'nanoid';
// 2. импортируем REMOVE_CONTACT
import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACT } from './types';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: { ...payload, id: nanoid() },
  };
};

// 3. Создаем action или actionCreator
export const removeContact = contactId => {
  // 4. чтобы удалить контакт нам нужен только его id следовательно payload будет не обьект -> reducer
  return {
    type: REMOVE_CONTACT,
    payload: contactId,
  };
};

export const filterContact = filterValue => {
  return {
    type: FILTER_CONTACT,
    payload: filterValue,
  };
};
