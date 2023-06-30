import { createSlice } from '@reduxjs/toolkit';

export const currentGenreorCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    currentGenreIDorCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreorCategory: (state, action) => {
      // here we are using the action.payload to set the currentGenreorCategoryName via the left click of the mouse
      // console.log(action.payload);
      state.currentGenreIDorCategoryName = action.payload;
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      // console.log(action.payload);
      state.searchQuery = action.payload;
    },

  },

});

export const { selectGenreorCategory, searchMovie } = currentGenreorCategory.actions;
// exporting this reducer so that it can be used in the store.js
export default currentGenreorCategory.reducer;
