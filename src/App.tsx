import React from 'react';
import Sidebar from './components/Sidebar';
import TikTokVerticalFeed from './components/VerticalFeed';
import './App.css'; // or your styling approach

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <TikTokVerticalFeed />
    </div>
  );
}

export default App;
