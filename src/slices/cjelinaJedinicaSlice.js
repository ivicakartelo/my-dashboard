import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCjelina_jedinica = createAsyncThunk('cjelina_jedinica/fetchCjelina_jedinica', async () => {
  const response = await axios.get('http://localhost:5000/cjelina_jedinica');
  return response.data;
});

const cjelina_jedinicaSlice = createSlice({
  name: 'cjelina_jedinica',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCjelina_jedinica.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default cjelina_jedinicaSlice.reducer;