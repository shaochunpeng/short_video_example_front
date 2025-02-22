// TikTokVerticalFeed.tsx
import React, { useState, useRef, useEffect } from 'react';
import FullScreenVideoCard, { VideoItem } from './FullScreenVideoCard';

const TikTokVerticalFeed: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // Fetch data from backend on mount
  useEffect(() => {
    fetch('http://localhost:4000/api/videos')
      .then((res) => res.json())
      .then((data: VideoItem[]) => {
        setVideos(data);
      })
      .catch((err) => console.error('Error fetching videos:', err));
  }, []);

  // Intersection observer logic for auto-play
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            target.play();
          } else {
            target.pause();
            target.currentTime = 0;
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [videos]);

  // Optional: handle like/comment/share
  const handleLike = (videoId: number) => {
    console.log('Like video with id:', videoId);
    // Make POST request to /api/like, or update local state, etc.
  };

  const handleComment = (videoId: number) => {
    console.log('Comment on video with id:', videoId);
    // Open a comment modal, etc.
  };

  const handleShare = (videoId: number) => {
    console.log('Share video with id:', videoId);
    // Possibly copy link to clipboard, etc.
  };

  return (
    <main className="vertical-feed-container">
      {videos.map((video, idx) => (
        <FullScreenVideoCard
          key={video.id}
          video={video}
          setRef={(el) => {
            if (el) videoRefs.current[idx] = el;
          }}
          onLike={handleLike}
          onComment={handleComment}
          onShare={handleShare}
        />
      ))}
    </main>
  );
};

export default TikTokVerticalFeed;
