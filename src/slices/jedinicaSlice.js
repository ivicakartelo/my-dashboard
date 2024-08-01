import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchJedinica = createAsyncThunk('jedinica/fetchJedinica', async () => {
  const response = await axios.get('http://localhost:5000/jedinica');
  return response.data;
});

const jedinicaSlice = createSlice({
  name: 'jedinica',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJedinica.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default jedinicaSlice.reducer;