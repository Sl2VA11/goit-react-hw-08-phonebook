import { createReducer } from '@reduxjs/toolkit';

import actions from './contacts-actions';

const initialStore = {
  items: [],
  filter: '',
  loading: false,
  error: null,
};

const contactsReducer = createReducer(initialStore, {

  [actions.fetchContactsLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [actions.fetchContactsSuccess]: (store, { payload }) => {
    console.log(payload);
    store.loading = false;
    store.items = payload;
  },
  [actions.fetchContactsError]: (store, { payload }) => {
    store.loading = false;
    store.items = payload;
  },

  [actions.addContactsLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [actions.addContactsSuccess]: (store, { payload }) => {
    store.loading = false;
    store.items.push(payload);
  },
  [actions.fetchContactsError]: (store, { payload }) => {
    store.loading = false;
    store.items = payload;
  },

  [actions.deleteContactsLoading]: store => {
    store.loading = true;
  },
  [actions.deleteContactsSuccess]: (store, { payload }) => {
    store.loading = false;
    store.items = store.items.filter(({ id }) => id !== payload);
  },
  [actions.deleteContactsError]: (store, { payload }) => {
    store.loading = false;
    store.items = payload;
  },

  
  // [actions.filterContacts]: (store, { payload }) => { 
    
  //   store.loading = false;
  //   store.filter = payload;
  // },
 

});

export default contactsReducer;
