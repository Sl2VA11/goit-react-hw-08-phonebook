import { React, useEffect, useState } from 'react';
// import { ContactForm } from '../../components/ModalAddContacts/ContactForm';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList/ContactsList';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import css from './ContactsPage.module.css';
import { FaPlusCircle } from 'react-icons/fa';
import {
  fetchContacts,
  addContact,
  deleteContacts,
} from '../../redux/contacts/contacts-operations';
import { filterContacts } from 'redux/filter/filter-actions';
import Notiflix from 'notiflix';
import Loader from '../../components/Loader/Loader';
import { Container } from 'react-bootstrap';
import ModalAddContacts from 'components/ModalAddContacts/ModalAddContacts';

export default function Contacts() {
  const items = useSelector(store => store.contacts.items);
  const filter = useSelector(store => store.filter);
  const loading = useSelector(store => store.contacts.loading);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  const formSubmitHandler = ({ name, number }) => {
    if (items.filter(contact => contact.name === name).length > 0) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(contact));
  };

  const changeFilter = e => {
    console.log(e.currentTarget.value);

    dispatch(filterContacts(e.currentTarget.value));
  };

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <>
      {loading === true && <Loader />}
      <div className={items.length !== 0 ? css.contactSection : css.withoutContacts}>
        <Container>
          <ModalAddContacts
            show={modalShow}
            onHide={() => setModalShow(false)}
            onSubmit={formSubmitHandler}
            setModalShow={setModalShow}
          />
          {items.length !== 0 ? (
            <Filter onChange={changeFilter} value={filter} />
          ) : (
              <p className={css.noContactsText}> Please add your contacts</p>
          )}

          {items.length > 0 && (
            <ContactsList
              filter={filter}
              deleteContact={deleteContact}
              items={items}
            />
          )}
          <button
            className={css.openModalBtn}
            onClick={() => setModalShow(true)}
          >
            <FaPlusCircle className={css.addContactIcon} />
          </button>
        </Container>
      </div>
    </>
  );
}


