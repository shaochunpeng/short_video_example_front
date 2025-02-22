// src/components/ActionBar.tsx
import React from 'react';
import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';
// ^ If you want to use react-icons, install it with npm install react-icons

interface ActionBarProps {
  likes: number;
  comments: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({
  likes,
  comments,
  onLike,
  onComment,
  onShare,
}) => {
  return (
    <div className="action-bar">
      <div className="action-bar-item" onClick={onLike}>
        <FiHeart size={48} />
        <span>{likes}</span>
      </div>
      <div className="action-bar-item" onClick={onComment}>
        <FiMessageCircle size={48} />
        <span>{comments}</span>
      </div>
      <div className="action-bar-item" onClick={onShare}>
        <FiShare2 size={48} />
      </div>
    </div>
  );
};

export default ActionBar;
