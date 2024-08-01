import React from 'react';
import './App.css'; // Custom styles for the application
import Header from './components/Header'; // Header component
import Sidebar from './components/Sidebar'; // Sidebar component
import Main from './components/Main'; // Main content area component

function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header />

      <div className="App-body">
        {/* Sidebar component */}
        <Sidebar />

        {/* Main content area */}
        <Main />
      </div>
    </div>
  );
}

export default App;