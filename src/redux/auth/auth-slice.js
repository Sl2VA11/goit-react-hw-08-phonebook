import { createSlice } from '@reduxjs/toolkit';

import { login ,register ,logout , current} from './auth-operations';


const initialState = {
  user: {
    name: '',
    email: '',
  },

  token: null,
  isLogged: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogged = true;
    },
    [register.rejected]: (state, { payload }) => {
      console.log(payload)
      state.loading = false;
      state.isLogged = false;
      state.error = payload;
    },

    [login.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;

      state.user = payload.user;
      state.token = payload.token;
      state.isLogged = true;
    },
    [login.rejected]: (state, { payload }) => {
      
      state.loading = false;
      state.isLogged = false;
      state.error = payload;
    },

    [logout.pending]: state => {
      state.loading = true;
    },
    [logout.fulfilled]: state => {
      state.loading = false;
      state.user = {
        name: '',
        email: '',
      };
      state.token = null;
      state.isLogged = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isLogged = false;
      state.error = payload;
    },

    [current.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [current.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.isLogged = true;
    },
    [current.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isLogged = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
