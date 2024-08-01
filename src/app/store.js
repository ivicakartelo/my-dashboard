import { configureStore } from '@reduxjs/toolkit';
import podrucjeReducer from '../slices/podrucjeSlice';
import cjelinaReducer from '../slices/cjelinaSlice';
import jedinicaReducer from '../slices/jedinicaSlice';
import cjelinaJedinicaReducer from '../slices/cjelinaJedinicaSlice';

export const store = configureStore({
  reducer: {
    podrucje: podrucjeReducer,
    cjelina: cjelinaReducer,
    jedinica: jedinicaReducer,
    cjelinaJedinica: cjelinaJedinicaReducer,
  },
});