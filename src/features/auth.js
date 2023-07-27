import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  sessionId: '',
  isAuthenticated: false,

};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem('session_id');
      localStorage.setItem('account_id', action.payload.id);
    },
  },
});

export const { setUserLoginDetails } = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state) => state.user;
