import React from 'react';

const VideoList = ({ videos }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <div key={video.id.videoId} className="border rounded-lg p-4 shadow-md">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="mt-2 font-bold text-lg line-clamp-2">{video.snippet.title}</h3>
          <p className="mt-2 text-gray-600 line-clamp-3">{video.snippet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;