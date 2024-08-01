import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPodrucje = createAsyncThunk('podrucje/fetchPodrucje', async () => {
  const response = await axios.get('http://localhost:5000/podrucje');
  return response.data;
});

const podrucjeSlice = createSlice({
  name: 'podrucje',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPodrucje.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default podrucjeSlice.reducer;