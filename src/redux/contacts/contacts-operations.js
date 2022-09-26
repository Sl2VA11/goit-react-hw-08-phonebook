import { getContacts, addContacts, removeContact } from '../../api/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await getContacts();
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/add',
  async (data, thunkApi) => { 
    try {
      console.log(data);
      await addContacts(data)
      return data
    } catch (error) {
       return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contact/delete',
  async (data, thunkApi) => {
    try {
      await removeContact(data);
      return data;
      
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
