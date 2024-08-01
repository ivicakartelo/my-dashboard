import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPodrucje } from '../slices/podrucjeSlice';

const PodrucjeList = () => {
  const dispatch = useDispatch();
  const podrucje = useSelector(state => state.podrucje);

  useEffect(() => {
    dispatch(fetchPodrucje());
  }, [dispatch]);

  return (
    <div>
      <h1>Podrucje List</h1>
      <ul>
        {podrucje.map(p => (
          <li key={p.podrucje_id}>{p.ime}: {p.opis}</li>
        ))}
      </ul>
    </div>
  );
};

export default PodrucjeList;