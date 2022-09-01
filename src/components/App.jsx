import 'modern-normalize/modern-normalize.css';
import s from './app.module.css';

import SectionTitle from './Section/SectionTitle';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

// в компоненте нужно импортировать useDispatch
import { useSelector, useDispatch } from 'react-redux';
// и экшн криейтор - строка 10 //8. в компоненте испортируем actioncreator - removeContact
import { addContact, removeContact, filterContact } from '../redux/actions.js';

const App = () => {
  // пришли из reducer.js с новыми данными в подписаный компонент. Он получил новые данные и перезаписался
  const { contacts, filter } = useSelector(state => {
    console.log('state.phonebook: ', state);
    return state.contacts.phonebook;
  });

  const filterValue = filter;
  // вызвать useDispatch - получить вызвать
  const dispatch = useDispatch();

  // в функции которая должна менять store сначала получаем action потом передaем его в dispatch
  const onAddContact = data => {
    const action = addContact(data);
    const { name } = data;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} - this contact already in contact list`);
      return;
    } else if (name === '') {
      alert('Please enter your name');
      return;
    }

    dispatch(action);
    // dispatch вызывает сам reducer передавая ему текщее значение стора и action -> reducer.js
  };
  // 9. Создаем новую Ф.
  const onRemoveContact = id => dispatch(removeContact(id));

  const onfilterContact = e => dispatch(filterContact(e.target.value));

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  return (
    <div className={s.wrap}>
      <SectionTitle title="Phonebook">
        {/* в инфо приходит наш стейт с формы после сабмита и записываеться в параметр дата */}
        <ContactsForm catchSubmitInfo={onAddContact} />
      </SectionTitle>
      <SectionTitle title="Contacts">
        <Filter filterValue={filterValue} onFilter={onfilterContact} />
        {contacts.length ? (
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={onRemoveContact}
          />
        ) : (
          <p>Your phonebook is empty</p>
        )}
      </SectionTitle>
    </div>
  );
};
export default App;
