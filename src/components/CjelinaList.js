import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCjelina } from '../slices/cjelinaSlice';

const CjelinaList = () => {
  const dispatch = useDispatch();
  const cjelina = useSelector(state => state.cjelina);

  useEffect(() => {
    dispatch(fetchCjelina());
  }, [dispatch]);

  return (
    <div>
      <h1>Cjelina List</h1>
      <ul>
        {cjelina.map(p => (
          <li key={p.cjelina_id}>{p.ime}: {p.opis}</li>
        ))}
      </ul>
    </div>
  );
};

export default CjelinaList;