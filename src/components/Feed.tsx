// src/components/Feed.tsx
import React, { useState, useEffect, useRef } from 'react';
import VideoCard from './VideoCard';

interface Video {
  id: number;
  src: string;
  poster?: string;
}

const Feed: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([
    { id: 1, src: '...', poster: '...' },
    { id: 2, src: '...', poster: '...' },
    // ...
  ]);

  // We'll store a ref for each video element
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    // Setup intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            // Video is in view, play it
            target.play();
          } else {
            // Video is out of view, pause it
            target.pause();
            target.currentTime = 0; // optional reset
          }
        });
      },
      {
        threshold: 0.5, // video is considered "in view" when 50% is visible
      }
    );

    // Observe each video element
    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    // Cleanup: unobserve on unmount
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <div className="feed-container">
      {videos.map((video, index) => (
        <VideoCard
          key={video.id}
          video={video}
          // We pass a function so we can store the DOM element in `videoRefs`
          setRef={(el) => {
            if (el) {
              videoRefs.current[index] = el;
            }
          }}
        />
      ))}
    </div>
  );
};

export default Feed;
