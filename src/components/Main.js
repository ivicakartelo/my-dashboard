import React, { useEffect, useState } from 'react';
//import './Main.css'; // Custom styles for the main content

const Main = () => {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:5000/podrucje') // Replace with your actual API endpoint
      .then(response => {
        if (!response.ok) {
          // If response is not OK, throw an error
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data); // Set the data in state
        setLoading(false); // Set loading to false
      })
      .catch(error => {
        // Convert error to string and set it in state
        console.error('Error fetching data:', error);
        setError(`Failed to fetch: ${error.message || 'Unknown error'}`);
        setLoading(false); // Set loading to false
      });
  }, []); // Empty dependency array to run only once on mount

  if (loading) {
    return <div className="Main">Loading...</div>;
  }

  if (error) {
    return <div className="Main">Error: {error}</div>;
  }

  return (
    <main className="Main">
      <h2>Dashboard Overview</h2>
      <p>Welcome to your dashboard! Here is the data from the backend:</p>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.podrucje_id}>
                <td>{item.podrucje_id}</td>
                <td>{item.ime}</td>
                <td>{item.opis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </main>
  );
};

export default Main;