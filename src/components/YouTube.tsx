import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

const YOUTUBE_CHANNEL_ID = 'oliviatodesco'; // Replace with your actual channel ID
// const YOUTUBE_API_KEY = 'YOUR_API_KEY'; // You'll need to provide this

const YouTube = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // For development, we'll use placeholder data
        // In production, uncomment the fetch code and use your API key

        // Uncomment this code and replace with your API key
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        const fetchedVideos = data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          url: `https://youtube.com/watch?v=${item.id.videoId}`,
        }));


        // Placeholder data for development
        // const fetchedVideos = [
        //   {
        //     id: '1',
        //     title: 'Building a Full-Stack Application with React and Node.js',
        //     thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
        //     url: 'https://youtube.com/@oliviatodesco',
        //   },
        //   {
        //     id: '2',
        //     title: 'Modern CSS Techniques for Better Web Design',
        //     thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800',
        //     url: 'https://youtube.com/@oliviatodesco',
        //   },
        //   {
        //     id: '3',
        //     title: 'Getting Started with TypeScript: A Beginner\'s Guide',
        //     thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
        //     url: 'https://youtube.com/@oliviatodesco',
        //   },
        // ];

        setVideos(fetchedVideos);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section id="youtube" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>Loading videos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="youtube" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600">
            <p>Error loading videos: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="youtube" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Videos</h2>
          <p className="text-lg text-gray-600">
            Check out my latest content on web development and programming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play size={48} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-poppins font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {video.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://youtube.com/@oliviatodesco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
            View More Videos
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTube;