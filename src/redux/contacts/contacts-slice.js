import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContacts } from './contacts-operations';
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [addContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [deleteContacts.pending]: store => {
      store.loading = true;
      store.error = null;
     },
     [deleteContacts.fulfilled]: (store, { payload }) => {
        store.loading = false;
        store.items = store.items.filter(({ id }) => id !== payload);
     },
     [deleteContacts.rejected]: (store, { payload }) => { 
        store.loading = false;
        store.null = payload
     }
  },
});

export default contactsSlice.reducer;
