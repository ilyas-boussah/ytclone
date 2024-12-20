import React, { useState, useEffect } from 'react';
import { fetchVideos } from './services/YoutubeAPI';  
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';


function App() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchVideos = async (query) => {
    try {
      setIsLoading(true);
      setError(null);
      const fetchedVideos = await fetchVideos(query);
      setVideos(fetchedVideos);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchVideos('React tutorials');
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recherche YouTube</h1>
      <SearchBar onSearch={searchVideos} isLoading={isLoading} />
      
      {error && (
        <div className="text-red-500 text-center mb-4 p-4 bg-red-50 rounded">
          {error}
        </div>
      )}
      
      {!error && !isLoading && videos.length === 0 && (
        <div className="text-center text-gray-500">
          Aucune vidéo trouvée
        </div>
      )}
      
      {!error && videos.length > 0 && <VideoList videos={videos} />}
      
      {isLoading && (
        <div className="text-center text-gray-600">
          Chargement des vidéos...
        </div>
      )}
    </div>
  );
}

export default App;