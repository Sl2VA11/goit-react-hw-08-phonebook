import { React, useEffect } from 'react';
import { Form } from '././ContactForm';
import { nanoid } from 'nanoid';
import ContactsList from '././ContactsList';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../Filter/Filter';
import {
  fetchContacts,
  addContact,
  deleteContacts,
} from '../.././redux/contacts/contacts-operations';
import { filterContacts } from 'redux/filter/filter-actions';
import Notiflix from 'notiflix';
import Loader from '../Loader/Loader';

export default function Contacts() {
  const items = useSelector(store => store.contacts.items);
  const filter = useSelector(store => store.filter);
  const loading = useSelector(store => store.contacts.loading);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  
  
  useEffect(() => {
   
    dispatch(fetchContacts());
    
  }, [dispatch, isLoggedIn]);

  const formSubmitHandler = (name, number) => {
    if (items.filter(contact => contact.name === name).length > 0) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(contact);
    dispatch(addContact(contact));
  };

  const changeFilter = e => {
    console.log(e.currentTarget.value);

    dispatch(filterContacts(e.currentTarget.value));
  };

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  console.log(loading);

  return (
    <>
      {loading === true && <Loader />}
      <h1 className="phonebook-title">Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2 className="phonebook-contact-title">Contact </h2>
      <Filter onChange={changeFilter} value={filter} />
      <p className="after-title">{items.length === 0 && 'No contacts'}</p>
      {items.length > 0 && (
        <ContactsList
          filter={filter}
          deleteContact={deleteContact}
          items={items}
        />
      )}
    </>
  );
}
