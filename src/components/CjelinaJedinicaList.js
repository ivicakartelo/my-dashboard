import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCjelinaJedinica } from '../slices/cjelinajedinicaSlice';

const CjelinaJedinicaList = () => {
  const dispatch = useDispatch();
  const cjelinajedinica = useSelector(state => state.cjelinajedinica);

  useEffect(() => {
    dispatch(fetchCjelinaJedinica());
  }, [dispatch]);

  return (
    <div>
      <h1>CjelinaJedinica List</h1>
      <ul>
        {cjelinajedinica.map(p => (
          <li key={p.cjelinajedinica_id}>{p.ime}: {p.opis}</li>
        ))}
      </ul>
    </div>
  );
};

export default CjelinaJedinicaList;