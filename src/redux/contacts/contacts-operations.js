import { applyMiddleware } from 'redux';
import { getContacts, addContacts, removeContact } from '../../api/contactsApi';

import actions from './contacts-actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchContactsLoading());
      const data = await getContacts();
      console.log(data);
      dispatch(actions.fetchContactsSuccess(data));
    } catch (error) {
      dispatch(actions.fetchContactsError(error.message));
    }
  };

  return func;
};

export const addContact = data => {
  const func = async dispatch => {
    try {
      dispatch(actions.addContactsLoading());

      const result = await addContacts(data);

      dispatch(actions.addContactsSuccess(result));
    } catch (error) {
      dispatch(actions.addContactsError(error.message));
    }
  };

  return func;
};

export const deleteContacts = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.deleteContactsLoading());
      await removeContact(id);

      dispatch(actions.deleteContactsSuccess(id));
    } catch (error) {
      dispatch(actions.deleteContactsError(error.message));
    }
  };

  return func;
};
