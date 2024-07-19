import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.unshift(action.payload);
    },
    removeItem: (state) => {
      state.pop();
    },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
