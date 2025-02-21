import React, { useRef } from 'react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
}


const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset time if you want
    }
  };

  return (
    <div
      className="video-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        loop
        muted
        className="video-player"
      />
    <div className="actions-bar">
      <button>❤️</button>
      <button>💬</button>
      <button>🔗</button>
    </div>

    </div>
  );
};

export default VideoCard;
