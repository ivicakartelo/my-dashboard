import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJedinica } from '../slices/jedinicaSlice';

const JedinicaList = () => {
  const dispatch = useDispatch();
  const jedinica = useSelector(state => state.jedinica);

  useEffect(() => {
    dispatch(fetchJedinica());
  }, [dispatch]);

  return (
    <div>
      <h1>Jedinica List</h1>
      <ul>
        {jedinica.map(p => (
          <li key={p.jedinica_id}>{p.ime}: {p.opis}</li>
        ))}
      </ul>
    </div>
  );
};

export default JedinicaList;