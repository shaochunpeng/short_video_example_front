// FullScreenVideoCard.tsx
import React from 'react';
import ActionBar from './ActionBar';

export interface VideoItem {
  id: number;
  src: string;
  poster?: string;
  description?: string;
  likes?: number;
  comments?: number;
  user?: {
    username: string;
    avatar?: string;
  };
}

interface FullScreenVideoCardProps {
  video: VideoItem;
  setRef?: (el: HTMLVideoElement | null) => void;
  onLike?: (videoId: number) => void;
  onComment?: (videoId: number) => void;
  onShare?: (videoId: number) => void;
}

const FullScreenVideoCard: React.FC<FullScreenVideoCardProps> = ({
  video,
  setRef,
  onLike,
  onComment,
  onShare
}) => {
  const handleLike = () => onLike && onLike(video.id);
  const handleComment = () => onComment && onComment(video.id);
  const handleShare = () => onShare && onShare(video.id);

  return (
    <section className="video-section">
      <video
        ref={setRef}
        className="video-player"
        src={video.src}
        poster={video.poster}
        loop
        muted
        playsInline
      />

      {/* Action bar on the right */}
      <ActionBar
        likes={video.likes ?? 0}
        comments={video.comments ?? 0}
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
      />

      {/* Optional overlay for user info or description */}
      <div className="bottom-overlay">
        <p className="desc-text">{video.description}</p>
        {video.user && (
          <div className="user-info">
            <img
              src={video.user.avatar || 'https://picsum.photos/50'}
              alt="avatar"
              className="avatar"
            />
            <span>{video.user.username}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default FullScreenVideoCard;
