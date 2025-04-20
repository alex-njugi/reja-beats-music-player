import React, { useState, useEffect } from 'react';

const Home = () => {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSongs('drake'); 
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) fetchSongs(query);
    }, 500);

    return () => clearTimeout(delayDebounce);
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

  return (
    <div className="container">
      <h1>Music Search Player</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for songs or artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {error && <div className="error">{error}</div>}

      <h2 style={{ textAlign: 'center' }}>MUSIC</h2>
      <div className="song-list">
        {songs.length === 0 && !error && <p>No songs found.</p>}
        {songs.map((song) => (
          <div className="song-card" key={song.trackId}>
            <img src={song.artworkUrl100} alt={song.trackName} />
            <h3>{song.trackName}</h3>
            <p>{song.artistName}</p>
            <audio controls src={song.previewUrl}></audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
