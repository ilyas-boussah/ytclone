
// src/services/YoutubeAPI.js
import axios from 'axios';
import { YOUTUBE_CONFIG } from './config/youtube';  

const youtubeApi = axios.create({
  baseURL: YOUTUBE_CONFIG.BASE_URL
});

export const fetchVideos = async (query) => {
  try {
    const response = await youtubeApi.get('/search', {
      params: {
        part: 'snippet',
        q: query,
        key: YOUTUBE_CONFIG.API_KEY,
        type: 'video',
        maxResults: 5,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Erreur lors de la récupération des vidéos:', error);
    if (error.response?.status === 403) {
      throw new Error('Erreur d\'authentification avec l\'API YouTube');
    }
    throw new Error('Impossible de récupérer les vidéos');
  }
};
