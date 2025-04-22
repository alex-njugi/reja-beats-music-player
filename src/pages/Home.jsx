import React, { useState, useEffect } from 'react';
import SearchBar from "../components/SearchBar";
import SongList from "../components/SongList";

const Home = () => {
  const [query, setQuery] = useState('drake');  
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.trim()) fetchSongs(query);
  }, [query]);

  const fetchSongs = (searchTerm) => {
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=music&limit=25`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.results);
        setError(null);
      })
      .catch(() => {
        setError('Something went wrong while fetching songs.');
        setSongs([]);
      });
  };

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);  
  };

  return (
    <div className="container">
      <h1>Music Search Player</h1>

      <SearchBar onSearch={handleSearch} /> 

      {error && <div className="error">{error}</div>}

      <h2>MUSIC</h2>
      <SongList songs={songs} />
    </div>
  );
};

export default Home;
