
import { createAction } from '@reduxjs/toolkit';

export const addItems = createAction('items/add');

export const deleteItems = createAction('items/delete');

export const filterItems = createAction('items/filter');


 const fetchContactsLoading = createAction("contacts/fetch/loading");
 const fetchContactsSuccess = createAction("contacts/fetch/success");
const fetchContactsError = createAction("contacts/fetch/error"); 
 
 const addContactsLoading = createAction('contacts/add/loading');
 const addContactsSuccess = createAction('contacts/add/success');
const addContactsError = createAction('contacts/add/error'); 
 
 const deleteContactsLoading = createAction('contacts/delete/loading');
 const deleteContactsSuccess = createAction('contacts/delete/success');
const deleteContactsError = createAction('contacts/delete/error'); 
 

const filterContacts = createAction('contacts/filter/set');



const actions = {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsLoading,
  addContactsSuccess,
  addContactsError,
  deleteContactsLoading,
  deleteContactsSuccess,
  deleteContactsError,
  filterContacts,
};

export default actions