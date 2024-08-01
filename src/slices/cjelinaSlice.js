import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCjelina = createAsyncThunk('cjelina/fetchCjelina', async () => {
  const response = await axios.get('http://localhost:5000/cjelina');
  return response.data;
});

const cjelinaSlice = createSlice({
  name: 'cjelina',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCjelina.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default cjelinaSlice.reducer;