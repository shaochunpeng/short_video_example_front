import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import './App.css'; // or your styling approach

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
