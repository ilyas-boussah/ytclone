import React, { useState } from 'react';

const SearchBar = ({ onSearch, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher des vidéos..."
          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          disabled={isLoading}
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-red-300"
          disabled={isLoading}
        >
          {isLoading ? 'Recherche...' : 'Rechercher'}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;