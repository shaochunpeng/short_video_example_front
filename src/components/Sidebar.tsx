import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {/* User Profile Section */}
      <div className="profile-section">
        <img
          src="https://picsum.photos/100"
          alt="User Avatar"
          className="profile-avatar"
        />
        <h2 className="profile-name">John Doe</h2>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#following">Following</a>
        <a href="#explore">Explore</a>
        <a href="#settings">Settings</a>
      </nav>
    </div>
  );
};

export default Sidebar;
