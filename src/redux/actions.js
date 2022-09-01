import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', data => {
  return {
    payload: { ...data, id: nanoid() },
  };
});
export const removeContact = createAction('contacts/remove');

export const filterContact = createAction('contact/filter');
