import { userRegister, userLogin, userLogOut, getCurrentUser } from '../.././api/authApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await userRegister(credentials);

      return data;
    } catch ({ response }) {
      console.log(response);

      const { status, statusText } = response;
      const error = {
        status,
        statusText,
      };

      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await userLogin(credentials);
      console.log(data);
      return data;
    } catch ({ response }) {
      console.log(response);

      const {status, statusText} = response;
      const error = {
        status,
        statusText,
      }

      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await userLogOut();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue , getState}) => {
    try {
      const {auth} = getState();
      const data = await getCurrentUser(auth.token);
      console.log(data);
      return data;
    } catch ({ response }) {
      console.log(response);

      const { status, statusText } = response;
      const error = {
        status,
        statusText,
      };

      return rejectWithValue(error);
    }
  }
);